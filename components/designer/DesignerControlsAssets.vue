<template>
<div class="section-container h-full overflow-auto">
    <div class="section">
        <h1>Fonts</h1>
        <div class="font-list">
            <div 
                v-for="(font, i) of fonts" 
                :key="i"
            >
                <span :style="{ fontFamily: `'${font.name}'` }">{{ font.name }}</span>
                <button @click="deleteFont(i)" class="close-button">&times;</button>
            </div>
        </div>
        <div class="uploader">
            <FormulateInput
                type="file"
                name="file"
                label="Add Fonts"
                ref="fontUploader"
                help="Only ttf, otf, woff, woff2 allowed"
                :uploader="fontUploader"
                accept="font/*,application/vnd.ms-fontobject"
                @change="addFont"
                multiple
            />
        </div>
    </div>
    <div class="seperator">&nbsp;</div>
    <div class="section">

        <h1>Colors</h1>
        <div class="colors-list">
            <div v-for="(color, i) of colors" :key="i">
                <channel-color-picker 
                    class="color-item"
                    :color="color" 
                    @color-change="updateColor($event, i)" />
                <button class="close-button" @click="deleteColor(i)">&times;</button>
            </div>
            <div>
                <button class="w-full outline-none p-4 border-2 border-gray-400 border-dashed rounded-lg uppercase hover:text-green-500 hover:border-green-500" @click="addColor">Add Color</button>
            </div>
        </div>

    </div>
    <div class="seperator">&nbsp;</div>

    <div class="section">
        <h1>Styles</h1>
        <div 
            class="flex items-center p-4 border" 
            v-for="(style, i) of styles" 
            :key="i"
        >
            <div class="flex flex-grow flex-col">
                <div class="flex flex-col mb-6 mt-4">
                    <label class="text-sm font-bold">Style Display</label>
                    <span :style="{
                        fontFamily: `'${style.font}'`,
                        fontSize: `${style.size}px`,
                        color: style.color.css
                    }"> style {{ i + 1 }}</span>
                </div>
                    <FormulateInput
                        class="w-9/12"
                        label="Font"
                        type="select"
                        :options="fonts.filter(font => font.name).map(font => font.name)"
                        :value="style.font"
                        @input="updateStyle('font', i, $event)"
                    />
                    <FormulateInput
                        class="w-3/12"
                        label="Size"
                        type="number"
                        min="0"
                        :value="style.size"
                        @input="updateStyle('size', i, $event)"
                    />
                <div>
                    <label class="text-sm font-bold ml-2">Color</label>
                    <color-select :colors="colors" :value="style.color" @input="updateStyle('color', i, $event)" />
                </div>

            </div>
            <button @click="deleteStyle(i)" class="close-button">&times;</button>
        </div>
        <div>
            <button class="w-full outline-none mt-6 p-4 border-2 border-gray-400 border-dashed rounded-lg uppercase hover:text-green-500 hover:border-green-500 mr-10" @click="addStyle">Add Style</button>
        </div>
    </div>

    <div class="seperator">&nbsp;</div>

</div>
</template>

<script>

const convert = require('color-convert');
import 'vue-multiselect/dist/vue-multiselect.min.css'
import ColorSelect from './Forms/ColorSelect.vue';

import { mapState, mapMutations, mapActions } from 'vuex'
import { arrayBufferToBase64 } from '~/assets/js/file_handlers'

export default {
  components: { ColorSelect },
  data () {
        return {
            fontFiles: [],
            selectedColor: undefined,
        }
    },
    methods: {
        fontUploader () {
            return Promise.resolve({})
        },
        updateColor (color, index) {

            const rgb = convert.cmyk.rgb(color.channels)
            color.css = `rgb(${rgb.join(',')})`
            
            this.editAsset({
                index,
                key: 'colors',
                value: color
            })

        },
        updateStyle (key, index, value) {

            const style = { ...this.styles[index] }
            style[key] = value

            this.editAsset({
                index,
                key: 'styles',
                value: style
            })

        },
        async addFont (e) {
            
            const fonts = e.target.files
            const failedFonts = []

            for (const fontFile of fonts) {
                
                const [ extension, ...fontName ] = fontFile.name.split('.').reverse()
                const name = fontName.join('.')

                const fontExists = this.fonts.findIndex(font => font.name === name)
                if (fontExists > -1) continue

                const fontData = await fontFile.arrayBuffer()
                const allowedExtensions = ['ttf', 'otf', 'woff', 'woff2']
                if (allowedExtensions.indexOf(extension.toLowerCase()) == -1) {
                    failedFonts.push(name)
                    continue 
                }

                const font = new FontFace(name, fontData);
                await font.load();
                document.fonts.add(font);

                const base64 = await arrayBufferToBase64(fontData)
                this.addAsset({ key: 'fonts', value: {
                    name, 
                    fontData: base64
                }})
                

            }

            this.$nextTick(() => {
                document.querySelectorAll('.formulate-file-remove').forEach(e => e.click())
            })

            return true

        },
        addColor () {
            this.addAsset({ key: 'colors', value: {
                type: "cmyk",
                channels: [100,100,100,100],
                css: 'rgb(0,0,0)'
            }})
        },
        addStyle () {
            this.addAsset({ key: 'styles', value: {
                font: this.fonts && this.fonts[0],
                color: this.colors && this.colors[0],
                size: 12
            }})
            // {
            //     type: "cmyk",
            //     channels: [100,100,100,100],
            //     css: 'rgb(0,0,0)'
            // },

        },
        deleteFont (index) {
            this.editAsset({ key: 'fonts', index })
        },
        deleteColor (index) {
            this.editAsset({ key: 'colors', index })
        },
        deleteStyle (index) {
            this.styles.splice(index, 1)
        },
        ...mapMutations({
            addAsset: 'designer/push_to_state',
            editAsset: 'designer/splice_from_state',
        })
    },
    computed: {
        ...mapState({
            fonts: state => state.designer.fonts,
            colors: state => state.designer.colors,
            styles: state => state.designer.styles,
        })
    }
}
</script>

<style scoped>

    .font-list {
        @apply flex flex-col border-t;
    }

    .font-list > div {
        @apply flex items-center justify-between p-4 border border-t-0;
    }

    .close-button {
        @apply outline-none text-red-500 p-4; 
    }

    .font-list > div > span {
        @apply text-xl py-2 pl-4;
    }

    .uploader {
        @apply p-4 my-4;
    }

    .uploader >>> .formulate-input .formulate-input-element {
        max-width: 100%;
    }

    .uploader >>> .formulate-input .formulate-input-label {
        font-size: 1.2em;
        padding-bottom: 12px;
    }

    .uploader >>> .formulate-input .formulate-input-help {
        font-size: 1em;
        margin-top: 1em;
    }

    .uploader >>> .formulate-input .formulate-input-error, .formulate-input .formulate-file-upload-error {
        @apply text-red-500;
        font-size: 1em;
        margin-bottom: 0.25em;
    }



    .colors-list > div {
        @apply flex items-center justify-between my-4;
    }

        div >>> .sb-color_picker-picker-list li.is-active {
        background: #2b6cb0;
        color: #FFF;
    }

    .colors-list >>> .sb-color_picker-picker {
        @apply shadow-lg ; 
        padding: 2rem;
        z-index: 999;
    }

    .colors-list >>> .sb-color_picker-current {
        @apply border;
    }

    .colors-list >>> .sb-color-values input { 
        @apply border;
    }


</style>
<template>
<div class="section-container h-full overflow-auto">
    <div class="section">
        <h1>Fonts</h1>
        <div class="font-list">
            <div 
                v-for="(font, i) of fonts" 
                :key="i"
            >
                <span>{{ font.name }}</span>
                <button @click="deleteFont(i)" class="close-button">&times;</button>
            </div>
        </div>
        <div class="uploader">
            <FormulateInput
                type="file"
                name="file"
                label="Upload Fonts"
                help="Select one or more fonts"
                :uploader="fontUploader"
                accept="font/*,application/vnd.ms-fontobject"
                validation="mime:font/*,application/vnd.ms-fontobject"
                @change="addFont"
                 :validation-messages="{
                    mime: 'Font format must be ttf, woff, woff2, or otf'
                }"
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
                    @color-change="colorChanged($event, i)" />
                <button class="close-button" @click="removeColor(i)">&times;</button>
            </div>
            <div>
                <button class="w-full outline-none p-4 border-2 border-gray-400 border-dashed rounded-lg uppercase hover:text-green-500 hover:border-green-500 mr-10" @click="addColor">Add Color</button>
            </div>
        </div>

    </div>
    <div class="seperator">&nbsp;</div>

</div>
</template>

<script>

export default {
    data () {
        return {
            colors: [
                { 
                    type: "cmyk",
                    channels: [5, 5, 5, 5]
                },
                { 
                    type: "cmyk",
                    channels: [2, 2, 2, 2]
                },
            ],
            fonts: [
                { name: 'Arial' },
                { name: 'Arial Narrow Bold' },
                { name: 'Times New Roman' },
            ]
        }
    },
    methods: {
        fontUploader (files) {
            
            console.log('from font uploader')
            console.log(files)

        },
        addFont (e) {

            const files = e.target.files
            console.log(files)
            
        },
        deleteFont (index) {
            this.fonts.splice(index, 1)
        },
        colorChanged (color, index) {
            this.colors.splice(index, 1, color)
        },
        removeColor (index) {
            this.colors.splice(index, 1)
        },
        addColor () {
            this.colors.push({
                type: "cmyk",
                channels: [100,100,100,100]
            })
        }
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

    .font-list div:nth-child(2) > span {
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    }

    .font-list div:nth-child(3) > span {
        font-family: 'Times New Roman', Times, serif;
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
        @apply shadow-lg; 
        border: 1px solid #DDD;
        padding: 2rem;
        z-index: 999;
    }

    .colors-list >>> .sb-color-values input { 
        @apply border;
    }





</style>
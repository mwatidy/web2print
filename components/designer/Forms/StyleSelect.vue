<template>
    <div :class="$props && $props.class">
        <label class="font-bold text-sm">{{ label || 'Select Style' }}</label>
        <multiselect :options="options" @select="onSelect" :value="selected">
            <template slot="singleLabel" slot-scope="{ option }">
                <span 
                    class="block py-4"
                    :style="{
                        fontFamily: `'${option.font}'`,
                        color: option.color && option.color.css,
                        fontSize: option.size + 'px'
                    }"
                >
                    {{ option.label }}
                </span>

            </template>
            <template slot="option" slot-scope="{ option }">
                <span 
                    class="block my-2 py-4"
                    :style="{
                        fontFamily: `'${option.font}'`,
                        color: option.color && option.color.css,
                        fontSize: option.size + 'px'
                    }"
                >
                    {{ option.label }}
                </span>
            </template>
        </multiselect>
        <div v-if="selected && selected.label === 'Custom style'"  class="flex flex-grow flex-col my-4">
            <label class="text-sm font-bold">Style Display</label>
            <span 
                class="block mb-4"
                :style="{
                    fontFamily: `'${style.font}'`,
                    fontSize: `${style.size}px`,
                    color: style.color && style.color.css
                }"
            > {{ $props.label || 'Custom Style' }} </span>
                <FormulateInput
                    class="w-9/12"
                    label="Font"
                    type="select"
                    :options="fonts.filter(font => font.name).map(font => font.name)"
                    :value="style.font"
                    @input="updateStyle('font', $event)"
                />
                <FormulateInput
                    class="w-3/12"
                    label="Size"
                    type="number"
                    min="0"
                    :value="style.size"
                    @input="updateStyle('size', $event)"
                />
            <div>
                <label class="text-sm font-bold ml-2">Color</label>
                <color-select 
                    :colors="colors" 
                    :value="style.color"
                    @input="updateStyle('color', $event)"
                />

            </div>
        </div>
    </div>    
</template>

<script>

const convert = require('color-convert');
import { mapState } from 'vuex'

export default {
    props: {
        value: {
            type: Object,
            required: false
        },
        label: {
            type: String
        }
    },
    data () {
        return {
            selected: null,
            style: {
                size: 12,
            }
        }
    },
    created () {
        if (this.value) this.selected = this.value
    },
    methods: {
        onSelect (option) {
            this.selected = option
            this.$emit('input', option)
        },
        updateStyle (key, value) {

            const style = this.style
            this.style = {
                ...style,
                [key]: value
            }

            this.$emit('input', this.style)
            
        },
    },
    computed: {
        ...mapState({
            options: state => {
                const styles = state.designer.styles.map((style, index) => ({ ...style, label: 'Style ' + index + 1 }))
                const otherOption = {
                    font: 'arial',
                    size: "12px",
                    color: { css: 'rgb(0,0,0)' },
                    label: 'Custom style'
                }
                return [ ...styles, otherOption ]
            },
            fonts: state => state.designer.fonts,
            colors: state => state.designer.colors
        })
    }
}
</script>

<style scoped>

</style>
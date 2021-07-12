<template>
    <div 
        :class="['text', addSelectionClass(text)]"
    >
        <span
            @click.self="updateActive(text)"
            :style="{ ...text.style, 
                lineHeight: text.textStyle.size + 'px',
                fontFamily: text.textStyle.font,
                fontSize: text.textStyle.size + 'px',
                color: text.textStyle && text.textStyle.color && text.textStyle.color.css,
             }"
        >
            {{ text.inputValue || text.title }}
        </span>
    </div>    
</template>

<script>

import DesignerMixin from '~/mixins/designer'    
    
export default {
    mixins: [ DesignerMixin ],
    props: {
        text: {
            type: Object
        }
    }
}
</script>

<style scoped>
    .text {
        @apply border;
    }

    .text span {
        @apply block;
    }
</style>
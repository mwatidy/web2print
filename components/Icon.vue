<template>
    <span :class="$props.class" :style="{ width, height }" v-html="require('~/assets/icons/'+type+'.svg?raw')"></span>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            required: true
        },
        width: {
            type: String,
            default: 'auto'
        },
        height: {
            type: String,
            default: 'auto'
        }
    }
}
</script>

<style scoped>
    span >>> svg {

        @apply fill-current;

        max-width: 100%;
        max-height: 100%;


    }
</style>
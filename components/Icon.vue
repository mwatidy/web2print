<template>
    <span v-html="require('~/assets/icons/'+type+'.svg?raw')"></span>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            required: true
        }
    }
}
</script>
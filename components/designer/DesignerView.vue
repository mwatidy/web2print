<template>
<div class="designer-view w-screen lg:w-full lg:h-screen flex flex-col items-center p-8">
    <page-view
        :key="page.path"
        v-for="page of pages"
        :page="page"
     />
</div>
</template>


<script>

import DesignerMixin from '~/mixins/designer'
import PageView from './View/PageView.vue'

export default {
    components: { PageView },
    mixins: [ DesignerMixin ],
    data () {
        return {

        }
    },
    methods: {
    }
}
</script>



<style scoped>

    .designer-view {
        min-height: 400px;
        @apply bg-gray-200;
    }

    .page {
        @apply my-8 bg-white relative border;
    }

    .container {
        @apply absolute border overflow-hidden border-blue-200 p-4 flex flex-col;
    }

    .group {
        @apply border border-blue-200 flex;
    }

    .text {
        @apply border border-blue-200;
    }





</style>
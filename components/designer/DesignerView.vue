<template>
<div 
    :key="refresh"
    class="designer-view w-screen lg:w-full lg:h-screen flex flex-col items-center p-8">

    <div
        :key="i"
        v-for="(page, i) of pages"
        @click.self="updateActive(page)"
        :style="{
            width: '500px',
            height: '300px'
        }"
        :class="['my-8 bg-white relative overflow-hidden', 
            samePage(page) ? 'border border-blue-500' : 'border hover:border-green-400 cursor-pointer'
        ]"
    >
        <span :class="['text-gray-700 text-xs absolute top-0 left-0 -mt-6', {
            'text-blue-500': samePage(page)
        }]">
            {{ page.title }}
        </span>
        <div 
            :style="container.style" 
            :class="['absolute border border-blue-200 p-4', {
                'border border-blue-500': samePage(container) && sameItem(container),
                'border hover:border-green-400 cursor-pointer': !(samePage(container) && sameItem(container))
            }]"
            @click.self="updateActive(container)" 
            v-for="(container, i) of page.children" 
            :key="i"
        >
            <!-- <span class="text-gray-700">more content</span> -->

        </div>
    </div>

</div>
</template>


<script>

import DesignerMixin from '~/mixins/designer'

export default {
    mixins: [ DesignerMixin ],
    data () {
        return {

        }
    },
    methods: {
        samePage (item) {
            return item.page === this.activeItem.page
        },
        sameItem (item) {
            return item.path == this.activeItem.path
        }
    }
}
</script>



<style scoped>

    .designer-view {
        min-height: 400px;
        @apply bg-gray-200;
    }



</style>
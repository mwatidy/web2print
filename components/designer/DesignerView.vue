<template>
<div class="designer-view w-screen lg:w-full lg:h-screen flex flex-col items-center p-8">

    <div
        :key="i"
        v-for="(page, i) of pages"
        @click.self="updateActive(page)"
        :style="{
            width: '500px',
            height: '300px'
        }"
        :class="['my-8 bg-white relative overflow-hidden', {
            'border border-blue-500': activeItem.title === page.title,
            'border hover:border-green-400 cursor-pointer': activeItem.title !== page.title
        }]"
    >
        <span :class="['text-gray-700 text-xs absolute top-0 left-0 -mt-6', {
            'text-blue-500': activeItem.title === page.title
        }]">
            {{ page.title }}
        </span>
        <div 
            :style="{
                ...container.style
            }" 
            :class="['absolute border border-blue-200 p-4', {
                'border border-blue-500': activeItem.title === container.title,
                'border hover:border-green-400 cursor-pointer': activeItem.title !== container.title
            }]"
            @click.self="updateActive(container)" 
            v-for="(container, i) of page.children" 
            :key="i"
        >


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
}
</script>



<style scoped>

    .designer-view {
        min-height: 400px;
        @apply bg-gray-200;
    }



</style>
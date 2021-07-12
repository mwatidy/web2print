<template>
    <div 
        :class="['page', addSelectionClass(page)]"
        @click.self="updateActive(page)"
    >
        <span :class="['pageTitle', 
            samePath(page) ? 'text-blue-500' : 'text-gray-700'
        ]">
            {{ page.title }}
        </span>

        <container-view 
            :key="container.path"
            v-for="container of page.children"
            :container="container"
        />
    </div>
</template>

<script>

import ContainerView from './ContainerView.vue'
import DesignerMixin from '~/mixins/designer'    
    
export default {
  mixins: [ DesignerMixin ],
  components: { ContainerView },
    props: {
        page: {
            type: Object
        }
    }
}
</script>

<style scoped>
    .page {
        width: 500px;
        height: 350px;
        @apply my-8 bg-white relative border;
    }
    .pageTitle {
        @apply text-xs absolute top-0 left-0 -mt-6;
    }
</style>
<template>
    <div 
        :class="['container', addSelectionClass(container)]"
        @click.self="updateActive(container)" 
        :style="container.style"    
    >
        <div 
            :key="child.path"
            v-for="child of container.children"
        >
            <group-view v-if="child.isGroup" :group="child" :name="child.path" />
            <text-view v-if="child.isText" :text="child" />
        </div>
    </div>
</template>

<script>

import GroupView from './GroupView.vue'
import TextView from './TextView.vue'

import DesignerMixin from '~/mixins/designer'    

export default {
  mixins: [ DesignerMixin ],
  components: { GroupView, TextView },
  props: {
        container: {
            type: Object
        }
    }
}
</script>

<style scoped>
    .container {
        @apply absolute border overflow-hidden flex flex-col;
    }
</style>
<template>
    <div 
        :class="['group', addSelectionClass(group)]"
        :style="group.style"
        @click.self="updateActive(group)" 
    >
        <div 
            :key="child.path"
            v-for="child of group.children"
        >
            <group-view v-if="child.isGroup" :group="child" :name="child.path" />
            <text-view v-if="child.isText" :text="child" />
        </div>
    </div>    
</template>

<script>

import DesignerMixin from '~/mixins/designer'   
import GroupView from './GroupView' 

export default {
    mixins: [ DesignerMixin ],
    props: {
        group: {
            type: Object
        }
    },
    beforeCreate () {
        this.$options.components.GroupView = GroupView
    },
}
</script>

<style scoped>
    .group {
        @apply border flex flex-wrap w-full;
    }
</style>
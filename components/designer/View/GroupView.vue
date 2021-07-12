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
            <group-view v-if="child.isGroup" :group="child" />
            <text-view v-if="child.isText" :text="child" />
        </div>
    </div>    
</template>

<script>

import DesignerMixin from '~/mixins/designer'    

export default {
    mixins: [ DesignerMixin ],
    props: {
        group: {
            type: Object
        }
    }
}
</script>

<style scoped>
    .group {
        @apply border flex flex-wrap w-full;
    }
</style>
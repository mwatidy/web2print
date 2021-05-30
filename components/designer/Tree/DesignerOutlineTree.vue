<template>
    <div class="flex flex-col parent">
        <DesignerOutlineTreeItem
            v-for="(item, x) of tree" :key="x"
            :item="item" 
        />
    </div>
</template>

<script>

import DesignerMixin from '~/mixins/designer'
import DesignerOutlineTreeItem from '~/components/designer/Tree/DesignerOutlineTreeItem'
import TreeIcon from './TreeIcon.vue'


export default {
    components: { DesignerOutlineTreeItem, TreeIcon },
    mixins: [ DesignerMixin ],
    props: {
        tree: {
            type: Array,
            default: () => []
        }
    },
}
</script>
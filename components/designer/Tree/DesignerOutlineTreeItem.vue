<template>
    <div class="flex flex-col" ref="text">
        <div>
            <div 
                @click="treeItemClick"
                :class="['flex items-center p-2 cursor-pointer', 
                    item.path == activeItem.path ? 'active-item' : 'hover:bg-blue-200'
                ]" 
                :style="{ paddingLeft: (depth) + 'em',  whiteSpace: 'nowrap', width: 'fit-content', minWidth: '100%' }" 
            >
                    <TreeIcon :icon="this[item.type]" />
                    <span class="pl-2">{{ item.title }}</span>
            </div>
            <div v-if="item.children">
                <DesignerOutlineTreeItem 
                    v-for="(child, i) of item.children"
                    :key="i"
                    :item="child" 
                />
            </div>
        </div>
    </div>
</template>

<script>

import DesignerOutlineTreeItem from '~/components/designer/Tree/DesignerOutlineTreeItem'
import DesignerMixin from '~/mixins/designer'

import { mapMutations, mapState } from 'vuex'

export default {
    // components: { DesignerOutlineTreeItem: () => import('~/components/designer/Tree/DesignerOutlineTreeItem.vue') },
    mixins: [ DesignerMixin ],
    props: {
        item: {
            type: Object
        }
    },
    beforeCreate () {
        this.$options.components.DesignerOutlineTreeItem = DesignerOutlineTreeItem
    },
    methods: {
        ...mapMutations({
            setActive: 'designer/update_active'
        }),
        treeItemClick () {

            this.setActive(this.item)
        }
    },
    computed: {
        depth () {

            if (!this.item.path) return 1
            return this.item.path.split('/').length + 1

        }
    },
}
</script>

<style scoped>
.active-item {
    @apply  font-bold text-blue-600;
}

.active-item >>> svg {
    @apply stroke-2 stroke-current fill-current text-blue-600;
    /* fill: #FFF;
    stroke: #FFF; */
}
</style>
<template>
    <div class="flex flex-col" ref="text">
        <div>
            <div 
                @click="treeItemClick"
                :class="['flex items-center p-2 cursor-pointer', 
                    item.page === activeItem.page && item.path == activeItem.path ? 'active-item' : 'hover:bg-blue-200'
                    ]" 
                :style="{ paddingLeft: (depth) + 'em',  whiteSpace: 'nowrap', width: 'fit-content', minWidth: '100%' }" 
            >
                    <TreeIcon :icon="type[item.type]" />
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
    data () {
        return {
            depth: 0
        }
    },
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

            this.setActive({ ...this.item })

            // console.log(this.depth)
            // console.log(this.item)

        }
    },
    computed: {
        ...mapState({
            activeItem: state => state.designer.activeItem
        })
    },
    mounted () {
        
        // GET THE ELEMENTS DEPTH FOR PADDING CALCULATION

        const elem = this.$refs.text
        let parent = elem.parentElement

        if (parent.classList.contains('parent')) return this.depth = 1

        this.depth = 0
        while (true) {

            this.depth += 1
            parent = parent.parentElement

            if (parent.classList.contains('parent'))  {

                this.depth = (this.depth / 3) + 1
                break;

            }

        }

    }
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
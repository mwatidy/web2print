<template>
<div class="flex w-full h-full">
    <div class="w-5/12 border">
        <div class="flex justify-between items-center border-b">
            <h1 class="p-4">Template 1</h1>
            <div class="flex items-center">
                <button class="p-4 border">A1</button>
                <button class="p-4 border">A2</button>
            </div>
        </div>
        <div class="overflow-auto h-full">
            <DesignerOutlineTree :tree="pages" />
        </div>
    </div>
    <div class="w-7/12 border p-4">

        <div class="flex items-center mb-6">
            <TreeIcon :icon="activeItem.type" width="30" height="30"/>
            <h1 class="text-xl font-bold pl-2 truncate"> {{ activeItem.title }} Properties </h1>
        </div>
        
        <DesignerPageForm />
        <DesignerContainerForm />
        <DesignerGroupForm />
        <DesignerTextForm />


        <!-- FORM ELEMENTS FOR PAGES -->
        <!-- FORM ELEMENTS FOR CONTAINERS -->
        <!-- FORM ELEMENTS FOR GROUPS -->
        <!-- FORM ELEMENTS FOR TEXTS -->
        
    </div>
</div>
</template>

<script>

import DesignerMixin from '~/mixins/designer'

import DesignerOutlineTree from '~/components/designer/Tree/DesignerOutlineTree'
import DesignerPageForm from '~/components/designer/Forms/DesignerPageForm'
import DesignerContainerForm from '~/components/designer/Forms/DesignerContainerForm'
import DesignerGroupForm from '~/components/designer/Forms/DesignerGroupForm'
import DesignerTextForm from '~/components/designer/Forms/DesignerTextForm'

import { mapState } from 'vuex'

export default {
    components: { DesignerOutlineTree, DesignerPageForm, DesignerContainerForm, DesignerGroupForm, DesignerTextForm },
    mixins: [ DesignerMixin ],
    data() {
        return {
            pages: [] 
        }
    },
    mounted () {
        this.pages =  [
                {
                    title: 'page 1',
                    type: this.type.PAGE,
                    children: [
                        {
                            title: 'container 1',
                            type: this.type.CONTAINER
                        },
                        {
                            title: 'container 2',
                            type: this.type.CONTAINER,
                            children: [
                                {
                                    title: 'group 1',
                                    type: this.type.GROUP,
                                    children: [
                                        {
                                            title: 'SubGroup',
                                            type: this.type.GROUP,
                                            children: [
                                                {
                                                    title: 'subtext',
                                                    type: this.type.TEXT
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: 'group 2',
                                    type: this.type.GROUP,
                                    children: [
                                        {
                                            title: 'subcontent 4 and some more info',
                                            type: this.type.TEXT
                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            title: 'container 2',
                            type: this.type.CONTAINER
                        }
                    ]
                },
                {
                    title: 'page 2',
                    type: this.type.PAGE
                }
            ] 
    },
    computed: {         
        ...mapState({
            activeItem: state => state.designer.activeItem,
        })
    }
}
</script>

<style scoped>

</style>
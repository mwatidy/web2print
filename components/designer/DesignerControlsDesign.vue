<template>
<div class="flex w-full h-full">
    <div class="w-5/12 border">
        <div class="flex justify-between items-center border-b">
            <h1 class="p-4">Template</h1>

            <div class="flex items-center">
                <button class="p-4 border"><Icon type="delete" /></button>
                <button class="p-4 border"><Icon type="add" /></button>
            </div>

            <!-- 
                SHOW TREE ACTIONS FOR GROUP
                SHOW TREE ACTIONS FOR CONTAINER
                SHOW TREE ACTIONS FOR PAGE
                SHOW TREE ACTIONS FOR TEXT
                
                 -->
            <!-- <div class="flex items-center" v-if="typeIs(type.GROUP)">
                <button class="p-4 border">A1</button>
                <button class="p-4 border">A2</button>
            </div> -->

            <!-- 

                page
                    create container

                container
                    create group
                    create text

                group
                    create text
                    move group 

                text
                    split to group
                    create text

             -->
        </div>
        <div class="overflow-auto">
            <DesignerOutlineTree :tree="pages" />
        </div>
    </div>
    <div class="w-7/12 border p-4  overflow-auto">

        <div class="flex items-center my-2 mb-6">
            <TreeIcon :icon="activeItem.type" width="30" height="30"/>
            <h1 class="text-xl font-bold pl-2 truncate"> {{ activeItem.title }} Properties </h1>
        </div>
        <DesignerPageForm v-if="typeIs(type.PAGE)" />
        <DesignerContainerForm v-if="typeIs(type.CONTAINER)" />
        <DesignerGroupForm v-if="typeIs(type.GROUP)" />
        <DesignerTextForm v-if="typeIs(type.TEXT)" />

        <button class="uppercase block bg-green-500 hover:bg-green-400 text-white w-full text-center p-4 my-8 font-bold rounded"> 
            Save
        </button>


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

export default {
    components: { DesignerOutlineTree, DesignerPageForm, DesignerContainerForm, DesignerGroupForm, DesignerTextForm },
    mixins: [ DesignerMixin ],
    data() {
        return {

        }
    },
    mounted () {


    },
    methods: {
        typeIs (type) {
            return this.type[type] === this.activeItem.type
        }
    },
}
</script>

<style scoped>

</style>
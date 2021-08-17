<template>
<div class="flex w-full h-full">
    <div class="w-5/12 border">
        <div class="flex justify-between items-center border-b">
            
            <!-- <h1 class="p-4">Template</h1> -->

            <div class="flex items-center">
                <button class="p-4 border-l" @click="showSettings"><Icon type="settings" /></button>
                <button class="p-4 border-l" @click="deleteItem()"><Icon type="delete" /></button>
                <button class="p-4 border-l" @click="addItem()" v-if="!activeItem || !activeItem.isText"><Icon type="add" /></button>
                <button class="p-4 border-l flex items-center" @click="addGroup(true)" v-if="activeItem && activeItem.isGroup"><Icon type="add" /> <span class="text-xs">Group</span></button>
            </div>

            <!-- 
                SHOW TREE ACTIONS FOR GROUP
                SHOW TREE ACTIONS FOR CONTAINER
                SHOW TREE ACTIONS FOR PAGE
                SHOW TREE ACTIONS FOR TEXT
                
                 -->
            <!-- <div class="flex items-center" v-if="typeIs(GROUP)">
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
    <div class="w-7/12 border p-4  overflow-auto" v-if="activeItem">

        <div class="flex items-center my-2 mb-6">
            <TreeIcon :icon="activeItem.type" width="30" height="30"/>
            <h1 class="text-xl font-bold pl-2 truncate"> {{ activeItem.title }} Properties </h1>
        </div>
        <DesignerPageForm v-if="typeIs(PAGE)" />
        <DesignerContainerForm v-if="typeIs(CONTAINER)" />
        <DesignerGroupForm v-if="typeIs(GROUP)" />
        <DesignerTextForm v-if="typeIs(TEXT)" />

    </div>
    <popup 
        :visible="settingsPopupVisible" 
        title="Settings" 
        @close="closeSettings"
    >
        <div class="p-8">

            <h1 class="pb-4 text-lg font-bold">Default metrics</h1>

            <div class="pb-4 flex items-center justify-between">
                <span>Page and margins</span>
                <select v-model="settings.margin">
                    <option value="pt">Points (pt)</option>
                    <option value="px">Pixels (px)</option>
                    <option value="in">Inches (in)</option>
                </select>
            </div>

            <div class="pb-4 flex items-center justify-between">
                <span>Font size</span>
                <select v-model="settings.font">
                    <option value="pt">Points (pt)</option>
                    <option value="px">Pixels (px)</option>
                    <option value="in">Inches (in)</option>
                </select>
            </div>
        </div>
        <template v-slot:actions>
            <button @click="closeSettings" class="bg-gray-300">Close</button>
            <button @click="saveSettings" class="bg-blue-700 text-white">Save</button>
        </template>
    </popup>
</div>
</template>

<script>

import DesignerMixin from '~/mixins/designer'

import DesignerOutlineTree from '~/components/designer/Tree/DesignerOutlineTree'
import DesignerPageForm from '~/components/designer/Forms/DesignerPageForm'
import DesignerContainerForm from '~/components/designer/Forms/DesignerContainerForm'
import DesignerGroupForm from '~/components/designer/Forms/DesignerGroupForm'
import DesignerTextForm from '~/components/designer/Forms/DesignerTextForm'

import { mapActions } from 'vuex'
import Popup from "~/components/Popup.vue";

export default {
    components: { DesignerOutlineTree, DesignerPageForm, DesignerContainerForm, DesignerGroupForm, DesignerTextForm, Popup },
    mixins: [ DesignerMixin ],
    data() {
        return {
            settingsPopupVisible: false,
            settings: {
                margin: 'pt',
                font: 'pt'
            }
        }   
    },
    methods: {
        ...mapActions({
            addItem: 'designer/addItem',
            deleteItem: 'designer/deleteItem',
            updateSettings: 'designer/updateSettings'
        }),
        addGroup () {
            this.addItem(true)
        },
        typeIs (type) {
            return this[type] === this.activeItem.type
        },
        showSettings () {
            const settings = { ...this.$store.state.designer.settings }
            this.settings = settings
            this.settingsPopupVisible = true 
        },
        saveSettings () {
            this.updateSettings(this.settings)
            this.settingsPopupVisible = false
        },
        closeSettings () {
            this.settingsPopupVisible = false
        }
    },
}
</script>

<style scoped>

</style>
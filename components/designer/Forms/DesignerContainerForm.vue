<template>
    <FormulateForm>

        <FormulateInput
            type="text"
            name="Name"
            label="Container Name"
            help="The name that appears for you"
            placeholder="Container 1"
        />

        <div class="flex">
            <FormulateInput
                class="mr-4"
                type="number"
                name="PositionX"
                label="Position X"
                placeholder="200"
                @input="update('left', $event)"
                :value="parseInt(activeItem.style.left.replace('px', ''))"
            />

            <FormulateInput
                class="mr-4"
                type="number"
                name="PositionY"
                label="Position Y" 
                placeholder="200"
                @input="update('top', $event)"
                :value="parseInt(activeItem.style.top.replace('px', ''))"  
            />
        </div>

        <div class="flex">
            <FormulateInput
                class="mr-4"
                type="number"
                name="width"
                label="Width"
                placeholder="200"
                min="0"
                @input="update('width', $event)"
                :value="parseInt(activeItem.style.width.replace('px', ''))"  
            />

            <FormulateInput
                class="mr-4"
                type="number"
                name="height"
                label="Height"
                placeholder="200" 
                min="0"
                @input="update('height', $event)"
                :value="parseInt(activeItem.style.height.replace('px', ''))"            
            />
        </div>

        <div class="flex">
            <FormulateInput
                class="mr-4"
                type="number"
                name="MinWidth"
                label="Min Width"
                placeholder="200"
                min="0"
            />

            <FormulateInput
                class="mr-4"
                type="number"
                name="MaxWidth"
                label="Max Width"
                placeholder="200" 
                min="0"          
            />
        </div>

        <div class="flex">
            <FormulateInput
                class="mr-4"
                type="number"
                name="MinHeight"
                label="Min Height"
                placeholder="200"
                min="0"
            />

            <FormulateInput
                class="mr-4"
                type="number"
                name="MaxHeight"
                label="Max Height"
                placeholder="200" 
                min="0"       
            />
        </div>

        <h1 class="font-bold pt-0 pb-4">Space inside container</h1>
        <div class="flex">

            <FormulateInput
                class="mr-4"
                type="number"
                name="PaddingTop"
                label="Top"
            />

            <FormulateInput
                class="mr-4"
                type="number"
                name="PaddingBottom"
                label="Bottom"
            />

            <FormulateInput
                class="mr-4"
                type="number"
                name="PaddingRight"
                label="Right"
            />

            <FormulateInput
                class="mr-4"
                type="number"
                name="PaddingLeft"
                label="Left"
            />

        </div>



        <FormulateInput
            type="select"
            name="Overflow"
            label="Overflow"
            :options="['Hide extra', 'Place on the next line']"
            help="If elements exceed width or height of container"
        />


        <FormulateInput
            type="select"
            name="ElementAxis"
            label="Elements placing"
            :options="['Next to each other', 'Below each other']"
            help="How will children elements be placed"
        />

        <FormulateInput
            type="select"
            name="ElementPositionX"
            label="Elements Positioning X Axis"
            :options="['Beginning', 'End', 'Center', 'Space Between']"
        />

        <FormulateInput
            type="select"
            name="ElementPositionY"
            label="Elements Positioning Y Axis"
            :options="['Beginning', 'End', 'Center', 'Space Between']"
        />

        <FormulateInput
            type="number"
            name="ElementPadding"
            label="Elements Spacing"
            help="space between elements"
        />

    </FormulateForm>
</template>

<script>

import { mapState } from 'vuex'
import DesignerMixin from '~/mixins/designer'

export default {
    mixins: [ DesignerMixin ],
    methods: {
        update (key, val) {

            console.log('key', key)
            console.log('val', val)

            // const active = this.activeItem
            const pages = this.pages
            
            pages[0].children[0].style[key] = val + 'px'
            this.$store.commit('designer/update_pages', pages)

            // console.log(this.pages[0].children[0])
            // console.log(this.pages[0].children[0].style[key])
            


        }
    },
    computed: {         
        ...mapState({
            activeItem: state => state.designer.activeItem,
            pages: state => state.designer.pages,
        })
    }
}
</script>
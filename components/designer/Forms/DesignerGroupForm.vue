<template>
    <FormulateForm>
        <FormulateInput
            type="text"
            name="Name"
            label="Group Name"
            help="The name that appears for you"
            placeholder="Group 1"
        />



        <h1 class="font-bold pt-0 pb-4">Space inside group</h1>
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
            name="ElementPosition"
            label="Elements Positioning"
            :options="['Beginning', 'End', 'Center', 'Space Between']"
        />

        <FormulateInput
            type="number"
            name="ElementPadding"
            label="Elements Spacing"
            help="space between elements"
        />

        <FormulateInput
            type="text"
            name="Seperator"
            label="Text Seperator"
            help="Characters between group elements"
        />



        

    </FormulateForm>
</template>

<script>

import { mapState } from 'vuex'
import DesignerMixin from '~/mixins/designer'

export default {
    mixins: [ DesignerMixin ],
    computed: {         
        ...mapState({
            activeItem: state => state.designer.activeItem,
        })
    }
}
</script>


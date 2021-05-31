<template>
    <FormulateForm
        v-if="activeItem.type === type.CONTAINER"
        
    >

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
            />

            <FormulateInput
                class="mr-4"
                type="number"
                name="PositionY"
                label="Position Y" 
                placeholder="200"           
            />
        </div>

        <div class="flex">
            <FormulateInput
                class="mr-4"
                type="number"
                name="MinWidth"
                label="Min Width"
                placeholder="200"
            />

            <FormulateInput
                class="mr-4"
                type="number"
                name="MaxWidth"
                label="Max Width"
                placeholder="200"           
            />
        </div>

        <div class="flex">
            <FormulateInput
                class="mr-4"
                type="number"
                name="MinHeight"
                label="Min Height"
                placeholder="200"
            />

            <FormulateInput
                class="mr-4"
                type="number"
                name="MaxHeight"
                label="Max Height"
                placeholder="200"           
            />
        </div>

        <FormulateInput
            type="number"
            name="padding"
            label="Spacing"
            help="space inside contianer"
        />


        <FormulateInput
            type="select"
            name="Overflow"
            label="Overflow"
            :options="['Hide extra', 'Place on the next line']"
            help="If elements exceed width or height of container"
        />

        <FormulateInput
            type="select"
            name="Direction"
            label="Direction of elements"
            :options="['Next to each other', 'Below each other']"
            help="How will children elements be placed"
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
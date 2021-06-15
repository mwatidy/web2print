<template>
    <FormulateForm>
        <FormulateInput
            type="text"
            name="Name"
            label="Input Name"
            help="The name that appears for you"
            placeholder="Input 1"
        />

        <FormulateInput
            type="select"
            name="Editable"
            label="Can users edit it"
            :options="['yes', 'no']"
        />

        <!-- IF EDITABLE - show poperties and validation else show only style -->

        <FormulateInput
            type="text"
            name="Help"
            label="Input Title"
            help="Title that appears for users"
        />

        <FormulateInput
            type="text"
            name="Help"
            label="Input Description"
            help="Help text that appears for users"
        />

        <FormulateInput
            type="select"
            name="Type"
            label="Type"
            :options="['Text', 'Seclection']"
            help="How the user inputs the value"
        />

        
        <!-- IF TEXT -->
        <FormulateInput
            type="text"
            name="Value"
            label="Default Value (Text)"
            help="This will be set by default"
        />

        <!-- IF SELECTION -->
        <div class="flex">
            <FormulateInput
                type="select"
                name="Value"
                class="mr-4"
                label="Default Value (Select)"
                :options="['Option1', 'Option2']"
                help="This will be set by default"
            />
            <button class="border w-10 h-10 mt-6">
                +
            </button>
        </div>


        <h1 class="font-bold pt-0 pb-4">Space around element</h1>
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

        <h1 class="font-bold pt-0 pb-4">Styles</h1>
        <FormulateInput
            type="select"
            name="FontFamily"
            label="Font Family"
            :options="['Font 1', 'Font 2']"
        />

        <FormulateInput
            type="number"
            name="FontSize"
            label="Font Size"
            min="1"
        />

        <FormulateInput
            type="select"
            name="FontColor"
            :options="['Color 1', 'Color 2']"
        />

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


        <FormulateInput
            type="select"
            name="Overflow"
            label="Overflow"
            :options="['Decrease font size', 'Create new line', 'Hide']"
            help="How will children elements be placed"
        />

        <FormulateInput
            type="text"
            name="Format"
            label="Format Input"
            placeholder="[xx], [xx]" 
            min="0"          
        />


        <h1 class="font-bold pt-0 pb-4">Validation</h1>
        <FormulateInput
            type="select"
            name="Validation"
            label="Validation"
            :options="['Text', 'Number', 'Date', 'Telepone', 'Mobile', 'Regular Exporession']"
        />

        <div class="flex">
            <FormulateInput
                class="mr-4"
                type="number"
                name="MinChar"
                label="Min Characters"
                placeholder="2"
            />

            <FormulateInput
                class="mr-4"
                type="number"
                name="MaxChar"
                label="Max Characters"
                placeholder="4"     
            />
        </div>






        

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




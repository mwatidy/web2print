<template>
    <FormulateForm
        :key="activeItem.path"
    >
        <FormulateInput
            type="text"
            name="Name"
            label="Input Name"
            help="The name that appears for you"
            placeholder="Input 1"
            @input="update({ value: $event, property: 'title' })"
            :value="activeItem.title"
        />

        <FormulateInput
            type="select"
            name="Editable"
            label="Can users edit it"
            :options="['yes', 'no']"
            @input="update({ value: $event, property: 'canEdit' })"
            :value="activeItem.canEdit"
        />

        <FormulateInput
            type="select"
            name="Type"
            label="Type"
            :options="['text', 'selection']"
            help="How the user inputs the value"
            v-if="activeItem.canEdit == 'yes'"
            @input="update({ value: $event, property: 'inputType' })"
            :value="activeItem.inputType"
        />

        <!-- IF EDITABLE - show poperties and validation else show only style -->

        <FormulateInput
            type="text"
            label="Input Title"
            help="Title that appears for users"
            v-if="activeItem.canEdit == 'yes'"
            @input="update({ value: $event, property: 'inputTitle' })"
            :value="activeItem.inputTitle"
        />

        <FormulateInput
            type="text"
            label="Input Description"
            help="Help text that appears for users"
            v-if="activeItem.canEdit == 'yes'"
            @input="update({ value: $event, property: 'inputHelp' })"
            :value="activeItem.inputHelp"
        />

        
        <!-- IF TEXT -->
        <FormulateInput
            type="text"
            name="Value"
            label="Default Value"
            help="This will be set by default"
            @input="update({ value: $event, property: 'inputValue' })"
            :value="activeItem.inputValue || activeItem.title"
            v-if="activeItem.canEdit == 'no' 
                || activeItem.inputType == 'text'"

        />

        <!-- IF SELECTION -->
        <FormulateInput
            type="group"
            name="selctionOptions"
            :repeatable="true"
            label="Selection choices"
            add-label="+ Add Option"
            @input="update({ value: $event, property: 'inputSelections' })"
            :value="activeItem.inputSelections"
            v-if="activeItem.canEdit == 'yes' 
                && activeItem.inputType == 'selection'"

            
        >
          <FormulateInput
            class="pt-4"
            name="selectOption"
          />
      </FormulateInput>


        <h1 class="font-bold pt-0 pb-4">Space around element</h1>
        <div class="flex">

            <FormulateInput
                class="mr-4"
                type="number"
                name="PaddingTop"
                label="Top"
                @input="update({ key:'paddingTop', value: $event + 'px', property: 'style' })"
                :value="normalizeNumber('paddingTop')"
            />

            <FormulateInput
                class="mr-4"
                type="number"
                name="PaddingBottom"
                label="Bottom"
                @input="update({ key:'paddingBottom', value: $event + 'px', property: 'style' })"
                :value="normalizeNumber('paddingBottom')"

            />

            <FormulateInput
                class="mr-4"
                type="number"
                name="PaddingRight"
                label="Right"
                @input="update({ key:'paddingRight', value: $event + 'px', property: 'style' })"
                :value="normalizeNumber('paddingRight')"

            />

            <FormulateInput
                class="mr-4"
                type="number"
                name="PaddingLeft"
                label="Left"
                @input="update({ key:'paddingLeft', value: $event + 'px', property: 'style' })"
                :value="normalizeNumber('paddingLeft')"

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
                @input="update({ key:'minWidth', value: $event + 'px', property: 'style' })"
                :value="normalizeNumber('minWidth')"

            />

            <FormulateInput
                class="mr-4"
                type="number"
                name="MaxWidth"
                label="Max Width"
                placeholder="200" 
                min="0"          
                @input="update({ key:'maxWidth', value: $event + 'px', property: 'style' })"
                :value="normalizeNumber('maxWidth')"

            />
        </div>


        <!-- <h1 class="font-bold pt-0 pb-4">Style</h1> -->

        <style-select 
            class="my-4"  
            @input="update({ value: $event, property: 'textStyle' })"
            :value="activeItem.textStyle"
        />




        <!-- <FormulateInput
            type="select"
            name="Overflow"
            label="Overflow"
            :options="['Decrease font size', 'Create new line', 'Hide']"
            help="How will children elements be placed"
        /> -->

        <!-- <FormulateInput
            type="text"
            name="Format"
            label="Format Input"
            placeholder="[xx], [xx]" 
            min="0"
            v-if="activeItem.canEdit == 'yes'"
        /> -->


        <!-- <h1 
            class="font-bold pt-0 pb-4"
            v-if="activeItem.canEdit == 'yes'"
        >
            Validation
        </h1> -->

        <FormulateInput
            type="select"
            name="Validation"
            label="Validation"
            :options="['Text', 'Number', 'Date', 'Telepone', 'Mobile', 'Regular Exporession']"
            @input="update({ value: $event, property: 'validationType' })"
            :value="activeItem.validationType"
            v-if="activeItem.canEdit == 'yes'"
        />

<!-- 
        <div 
            class="flex"
            v-if="activeItem.canEdit == 'yes'"
        >
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
        </div> -->


    </FormulateForm>
</template>

<script>
import DesignerFormMixin from '~/mixins/designerForm'
export default {
    mixins: [  DesignerFormMixin ],
}
</script>
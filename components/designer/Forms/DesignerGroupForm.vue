<template>
    <FormulateForm
    >
        <FormulateInput
            type="text"
            name="Name"
            label="Group Name"
            help="The name that appears for you"
            placeholder="Group 1"
            @input="update({ value: $event, property: 'title' })"
            :value="activeItem.title"
        />

        <!-- <FormulateInput
            class="mr-4"
            type="number"
            name="width"
            label="Width"
            placeholder="200"
            min="0"
            @input="update({ key:'width', value: $event + 'px', property: 'style' })"
            :value="normalizeNumber('width')"
        /> -->

        <!-- <div class="flex">


            <FormulateInput
                class="mr-4"
                type="number"
                name="height"
                label="Height"
                placeholder="200" 
                min="0"
                @input="update({ key:'height', value: $event + 'px', property: 'style' })"
                :value="normalizeNumber('height')"
            />
        </div> -->

        <h1 class="font-bold pt-0 pb-4">Space inside group</h1>
        <div class="flex">

            <FormulateInput
                class="mr-4"
                type="number"
                name="PaddingTop"
                label="Top"
                @input="update({ key:'paddingTop', value: $event + 'px', property: 'style' })"
                :value="parseInt(activeItem.style && activeItem.style.paddingTop && activeItem.style && activeItem.style.paddingTop.replace('px', ''))"

            />

            <FormulateInput
                class="mr-4"
                type="number"
                name="PaddingBottom"
                label="Bottom"
                @input="update({ key:'paddingBottom', value: $event + 'px', property: 'style' })"
                :value="parseInt(activeItem.style && activeItem.style.paddingBottom && activeItem.style && activeItem.style.paddingBottom.replace('px', ''))"

            />

            <FormulateInput
                class="mr-4"
                type="number"
                name="PaddingRight"
                label="Right"
                @input="update({ key:'paddingRight', value: $event + 'px', property: 'style' })"
                :value="parseInt(activeItem.style && activeItem.style.paddingRight && activeItem.style && activeItem.style.paddingRight.replace('px', ''))"

            />

            <FormulateInput
                class="mr-4"
                type="number"
                name="PaddingLeft"
                label="Left"
                @input="update({ key:'paddingLeft', value: $event + 'px', property: 'style' })"
                :value="parseInt(activeItem.style && activeItem.style.paddingLeft && activeItem.style && activeItem.style.paddingLeft.replace('px', ''))"

            />

        </div>


        <!-- <FormulateInput
            type="select"
            name="Overflow"
            label="Overflow"
            :options="['Hide extra', 'Place on the next line']"
            help="If elements exceed width or height of container"
        /> -->


        <!-- <FormulateInput
            type="select"
            name="ElementAxis"
            label="Elements placing"
            :options="['Next to each other', 'Below each other']"
            help="How will children elements be placed"
        /> -->

        <!-- <FormulateInput
            type="select"
            name="ElementPosition"
            label="Elements Positioning"
            :options="['Beginning', 'End', 'Center', 'Space Between']"
        /> -->

        <FormulateInput
            type="number"
            name="ElementPadding"
            label="Elements Spacing"
            help="space between elements, applies only to text elements that don't have full width"
            @input="update({ value: $event, property: 'elementSpacing' })"
            :value="activeItem.elementSpacing"

        />

        <alignment-select 
            class="my-4" 
            type="horizontal" 
            @input="update({ value: $event, property: 'alignment' })"
            :value="activeItem.alignment"
        />
        
        <FormulateInput
            type="text"
            name="Seperator"
            label="Text Seperator"
            help="Characters between group elements"
            @input="update({ value: $event, property: 'characterSeperator' })"
            :value="activeItem.characterSeperator"

        />

        <style-select class="my-4" label="Seperator style"  />




        

    </FormulateForm>
</template>

<script>
import DesignerFormMixin from '~/mixins/designerForm'
export default {
    mixins: [  DesignerFormMixin ],
    data () {
        return {
            alignment: null
        }
    }
}
</script>
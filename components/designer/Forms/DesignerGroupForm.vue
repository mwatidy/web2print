<template>
    <FormulateForm
        :key="activeItem.path"
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

        <!-- <FormulateInput
            type="number"
            name="ElementPadding"
            label="Elements Spacing"
            help="space between elements, applies only to text elements that don't have full width"
            @input="update({ value: $event, property: 'elementSpacing' })"
            :value="activeItem.elementSpacing"

        /> -->

        <alignment-select 
            class="my-4" 
            type="horizontal" 
            @input="update({ key:'justifyContent', value: $event.horizontal, property: 'style' })"
            :value="activeItem.style.justifyContent"
        />
        
        <FormulateInput
            type="text"
            name="Seperator"
            label="Text Seperator"
            help="Characters between group elements"
            @input="update({ value: $event, property: 'seperator' })"
            :value="activeItem.seperator"

        />

        <style-select 
            class="my-4" 
            label="Seperator style"  
            @input="update({ value: $event, property: 'seperatorStyle' })"
            :value="activeItem.seperatorStyle"
        />




        

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
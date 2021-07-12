<template>
    <FormulateForm
        :key="activeItem.path"
    >
        <FormulateInput
            type="text"
            name="Name"
            label="Container Name"
            help="The name that appears for you"
            placeholder="Container 1"
            @input="update({ value: $event, property: 'title' })"
            :value="activeItem.title"

        />

        <div class="flex">
            <FormulateInput
                class="mr-4"
                type="number"
                name="PositionX"
                label="Position X"
                placeholder="200"
                @input="update({ key:'left', value: $event + 'px', property: 'style' })"
                :value="normalizeNumber('left')"
            />

            <FormulateInput
                class="mr-4"
                type="number"
                name="PositionY"
                label="Position Y" 
                placeholder="200"
                @input="update({ key:'top', value: $event + 'px', property: 'style' })"
                :value="normalizeNumber('top')"
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
                @input="update({ key:'width', value: $event + 'px', property: 'style' })"
                :value="normalizeNumber('width')"
            />

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
        </div>

        <!-- <div class="flex">
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

        <div class="flex">
            <FormulateInput
                class="mr-4"
                type="number"
                name="MinHeight"
                label="Min Height"
                placeholder="200"
                min="0"
                @input="update({ key:'minHeight', value: $event + 'px', property: 'style' })"
                :value="normalizeNumber('minHeight')"
            />

            <FormulateInput
                class="mr-4"
                type="number"
                name="MaxHeight"
                label="Max Height"
                placeholder="200" 
                min="0"  
                @input="update({ key:'maxHeight', value: $event + 'px', property: 'style' })"
                :value="normalizeNumber('maxHeight')"
     
            />
        </div> -->

        <h1 class="font-bold pt-0 pb-4">Space inside container</h1>
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
            type="number"
            name="ElementPadding"
            label="Elements Spacing"
            help="space between elements"
            @input="update({ key:'paddingLeft', value: $event + 'px', property: 'style' })"
            :value="normalizeNumber('paddingLeft')"
        /> -->

        <alignment-select 
            class="my-4" 
            type="vertical" 
            @input="update({ key:'justifyContent', value: $event.vertical, property: 'style' })"
            :value="activeItem.style.justifyContent"
        />

        <!-- <style-select class="my-4"  /> -->
        <!-- :value="{ x: 1 }" -->



    </FormulateForm>
</template>

<script>
import DesignerFormMixin from '~/mixins/designerForm'
import AlignmentSelect from './AlignmentSelect.vue'
import StyleSelect from './StyleSelect.vue'

export default {
    components: { AlignmentSelect, StyleSelect },
    mixins: [  DesignerFormMixin ],
    data () {
        return {
            alignment: null
        }
    },
    // mounted () {
    //     console.log(this.activeItem)
    // }
    // methods: {

    // },
    // watch: {
    //     alignment (val) {
    //         console.log(val)
    //     }
    // }
}
</script>
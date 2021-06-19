<template>
    <FormulateForm
        :key="refreshValues"
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
                :value="parseInt(activeItem.style.left.replace('px', ''))"
            />

            <FormulateInput
                class="mr-4"
                type="number"
                name="PositionY"
                label="Position Y" 
                placeholder="200"
                @input="update({ key:'top', value: $event + 'px', property: 'style' })"
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
                @input="update({ key:'width', value: $event + 'px', property: 'style' })"
                :value="parseInt(activeItem.style.width.replace('px', ''))"  
            />

            <FormulateInput
                class="mr-4"
                type="number"
                name="height"
                label="Height"
                placeholder="200" 
                min="0"
                @input="update({ key:'height', value: $event + 'px', property: 'style' })"
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
import DesignerFormMixin from '~/mixins/designerForm'
export default {
    mixins: [  DesignerFormMixin ],
}
</script>
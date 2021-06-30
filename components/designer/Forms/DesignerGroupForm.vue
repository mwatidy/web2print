<template>
    <FormulateForm
        :key="refreshValues"
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
import DesignerFormMixin from '~/mixins/designerForm'
export default {
    mixins: [  DesignerFormMixin ],
}
</script>
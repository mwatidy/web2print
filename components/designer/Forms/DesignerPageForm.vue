<template>
    <FormulateForm
        :key="activeItem.path"
    >
        <FormulateInput
            type="text"
            name="Name"
            label="Page Name"
            help="The name that appears for you"
            placeholder="Page 1"
            @input="update({ value: $event, property: 'title' })"
            :value="activeItem.title"

        />

        <FormulateInput
            type="select"
            name="Background"
            label="Page Background"
            :options="['back 1', 'back 2']"
            help="The background of the page"
        />


    </FormulateForm>
</template>

<script>
import DesignerFormMixin from '~/mixins/designerForm'
export default {
    mixins: [  DesignerFormMixin ],
}
</script>
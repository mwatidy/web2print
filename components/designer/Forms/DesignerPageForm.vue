<template>
    <FormulateForm
        v-if="activeItem.type === type.PAGE"
        
    >
        <FormulateInput
            type="text"
            name="Name"
            label="Page Name"
            help="The name that appears for you"
            placeholder="Page 1"
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
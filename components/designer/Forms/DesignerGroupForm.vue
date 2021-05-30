<template>
    <FormulateForm
        v-if="activeItem.type === type.GROUP"
        values="formValues"
    >
        <FormulateInput
            type="email"
            name="email"
            label="Write your email"
            help="some note goes here"
            placeholder="Email"
            validation="required|email"
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
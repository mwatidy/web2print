<template>
    <DesignerControlsAssets v-if="active_section == section.ASSETS" />
    <DesignerControlsDesign v-else-if="active_section == section.DESIGN" />
    <DesignerControlsTest v-else-if="active_section == section.TEST" />
</template>

<script>
import DesignerMixin from '~/mixins/designer'

export default {
    layout: 'designer',
    mixins: [ DesignerMixin ],
    created () {
        console.log('you are on track')
    },
}
</script>

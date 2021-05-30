<template>
    <DesignerControlsAssets v-if="activeSection == section.ASSETS" />
    <DesignerControlsDesign v-else-if="activeSection == section.DESIGN" />
    <DesignerControlsTest v-else-if="activeSection == section.TEST" />
</template>

<script>
import DesignerMixin from '~/mixins/designer'

export default {
    layout: 'designer',
    mixins: [ DesignerMixin ],
    created () {
        
    },
}
</script>

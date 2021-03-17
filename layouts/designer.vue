<template>
<div class="w-full flex flex-col lg:flex-row">
  <div class="designer-view w-full lg:w-6/12 xl:w-7/12">
    <DesignerView />
  </div>
  <div class="designer-main w-full lg:w-6/12 xl:w-5/12">
    <DesignerMenu />
    <Nuxt />
  </div>
</div>
</template>

<script>

import DesignerMixin from '~/mixins/designer.js'

export default {
  mixins: [ DesignerMixin ]
}
</script>
<style>

</style>

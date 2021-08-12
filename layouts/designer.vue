<template>
<div class="w-full flex flex-col lg:flex-row max-h-screen	max-w-screen">
  <div class="designer-view w-full lg:w-6/12 xl:w-7/12">
    <DesignerView />
  </div>
  <div class="designer-main w-full lg:w-6/12 xl:w-5/12">
    <DesignerMenu />
    <div style="max-height: calc(100% - 70px);" class="h-full" >
      <Nuxt />
    </div>
  </div>
</div>
</template>

<script>
import AlignmentSelect from '~/components/designer/Forms/AlignmentSelect.vue'

import DesignerMixin from '~/mixins/designer.js'

export default {
  components: { AlignmentSelect },
  mixins: [ DesignerMixin ]
}
</script>

<style>


  .section-container {
    @apply p-6 
  }

  @screen lg {
    .section-container {
      @apply p-12;
    }
  } 

  .section {
    @apply my-2;
  }

  .seperator {
    @apply pt-10 mb-10 border-b w-full;
  }

  .section h1 {
    @apply text-3xl pb-6;
  }

</style>

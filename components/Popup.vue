<template>
  <div v-if="visible" class="fixed w-full h-full top-0 left-0 bg-gray-900 bg-opacity-70 flex items-center justify-center" @click.self="$emit('close')">
    <div class="bg-gray-50 w-full" style="max-width: 500px;">
      <div class="flex justify-between text-xl border-b">
        <span class="p-6">Settings</span>
        <button class="p-6" @click="$emit('close')">&times;</button>
      </div>
      <slot></slot>      
      <div class="actions">
        <slot name="actions"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            required: true 
        }
    }
}
</script>

<style scoped>
.actions {
  @apply flex border-t;
}

.actions button {
  @apply flex-grow py-4 uppercase font-bold;
}
</style>
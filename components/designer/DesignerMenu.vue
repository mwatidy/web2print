<template>
    <div class="flex">
        <button 
            v-for="button of buttons" 
            :key="button" 
            :class="['menu-button', { active: active_section == button }]"
            @click="$store.commit('designer/update_section', button)"
        >
            {{ button }} 
        </button>
    </div>
</template>

<script>
import DesignerMixin from '~/mixins/designer'

export default {
    mixins: [ DesignerMixin ],
    props: {
        buttons: {
            type: Array,
            default: _ => ['Assets', 'Design', 'Test']
        }
    }
}
</script>

<style scoped>
    .menu-button {
        @apply flex-grow py-4 border outline-none uppercase font-bold text-sm;
    }
    
    .menu-button.active {
        @apply text-white bg-blue-700;
    }
</style>
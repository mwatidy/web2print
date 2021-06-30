<template>
    <div :class="$props.class">
        <div v-if="showHorizontal" class="flex">
            <button 
                :key="button.icon"
                v-for="button of horizontalButtons"
                :class="[button.value === selectedHorizontal ? 'active' :  '']"
                @click="select('Horizontal', button)"
            >
                <!-- 'tooltip-container' -->
                <icon :type="button.icon" />
                <!-- <span class="tooltip-content"> Align Horizontal {{ button.value }} </span> -->
            </button>
        </div>
        <div v-if="showVertical" class="flex">
            <button 
                :key="button.icon"
                v-for="button of verticalButtons"
                :class="button.value === selectedVertical ? 'active' :  ''"
                @click="select('Vertical', button)"
            >
                <icon 
                    :type="button.icon" 
                />
            </button>
        </div>
    </div>
</template>


<script>

const horizontalButtons = [
    { icon: 'align/h-left', value: 'left' },
    { icon: 'align/h-center', value: 'center' },
    { icon: 'align/h-right', value: 'right' },
    { icon: 'align/h', value: 'equal' },
]

const verticalButtons = [
    { icon: 'align/v-top', value: 'left' },
    { icon: 'align/v-center', value: 'center' },
    { icon: 'align/v-bottom', value: 'right' },
    { icon: 'align/v', value: 'equal' },
]

export default {
    props: {
        type: {
            type: String,
            required: true
        },
        value: {
            type: Object,
            validator: (val) => {
                if (typeof val !== 'object') return false
                if (type === 'horizontal') return !!val.selectedHorizontal
                else if (type === 'both') return !!val.selectedVertical
                else return !!val.selectedHorizontal && !!val.selectedVertical
            }
        }
    },
    mounted () {
        // this.selectedHorizontal = this.value.selectedHorizontal
        // this.selectedVertical = this.value.selectedVertical
    },
    data () {
        return {
            horizontalButtons,
            verticalButtons,
            selectedHorizontal: null,
            selectedVertical: null,
        }
    },
    computed: {
        showHorizontal () {
            return this.type === 'horizontal' 
                || this.type === 'both'
        },
        showVertical () {
            return this.type === 'vertical' 
                || this.type === 'both'
        },
    },
    methods: {
        select (type, button) {

            this['selected'+type] = button.value
            this.$emit('input', { 
                horizontal: this.selectedHorizontal, 
                vertical: this.selectedVertical 
            })

        }
    }
}
</script>

<style scoped>
    button {
        @apply w-12 h-12 mr-2; 
    }

    button.active {
        @apply text-blue-500; 
    }

    button:hover {
        @apply border; 
    }

    .tooltip-container {
        @apply relative;
    }
    
    /* .tooltip-content {
        width: 150px;
        top: -100px;
        right: 0px;
        display: none;
        @apply absolute bg-white border p-4 text-center;
    }

    .tooltip-container:hover .tooltip-content {
        display: block;
        @apply z-10	capitalize;

    } */

</style>
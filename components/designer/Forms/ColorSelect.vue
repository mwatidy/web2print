<template>
    <div class="flex items-center flex-wrap">
        <span 
            :key="i"
            v-for="(color, i) of colors"
            :class="['block border m-2 rounded-md cursor-pointer', 
                i == selectedIndex ? 'w-14 h-14' : 'w-12 h-12'
            ]"
            :style="{ backgroundColor: color.css }"
            @click="select(i)"
        >
        </span>
    </div>
</template>

<script>

export default {
    props: {
        colors: {
            type: Array,
            default: () => []
        },
        value: {
            type: Object,
        }
    },
    mounted () {

        const index = this.colors.findIndex( color => color.css === this.value.css )
        this.selectedIndex = index
        this.selected = this.colors[index]
        
    },
    data () {
        return {
            selected: null,
            selectedIndex: null
        }
    },
    methods: {
        select (index) {
            this.selectedIndex = index
            this.selected = this.colors[index]
            this.$emit('input', this.selected)
        }
    }
}
</script>
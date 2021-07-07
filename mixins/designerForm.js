
import { mapState, mapMutations } from 'vuex'

export default {
    data () {
        return {
            refreshValues: false   
        }
    },
    methods: {
        ...mapMutations({
            update: 'designer/update_child'
        }),
        normalizeNumber (key) {
            if (!this.activeItem.style || !this.activeItem.style[key]) return null
            return this.activeItem.style[key].replace('px', '')
        }
    },
    computed: {
        ...mapState({
            activeItem: state => state.designer.activeItem,
            pages: state => state.designer.pages,
            refresh: state => state.designer.refresh
        })
    },
    watch: {
        // activeItem () {
        //     this.refreshValues = !this.refreshValues
        // },
        refresh () {
            this.refreshValues = !this.refreshValues
        }
    }
}
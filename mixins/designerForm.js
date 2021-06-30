
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
    },
    computed: {
        ...mapState({
            activeItem: state => state.designer.activeItem,
            pages: state => state.designer.pages,
            refresh: state => state.designer.refresh
        })
    },
    watch: {
        activeItem () {
            this.refreshValues = !this.refreshValues
        }
    }
}
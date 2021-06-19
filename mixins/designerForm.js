
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
        })
    },
    watch: {
        activeItem () {
            this.refreshValues = !this.refreshValues
        }
    }
}
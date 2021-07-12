
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    data () {
        return {
  
        }
    },
    methods: {
        ...mapActions({
            update: 'designer/updateChild'
        }),
        normalizeNumber (key) {
            if (!this.activeItem.style || !this.activeItem.style[key]) return null
            return this.activeItem.style[key].replace('px', '')
        }
    },
    computed: {
        ...mapState({
            pages: state => state.designer.pages,

        }),
        ...mapGetters({ 
            activeItem: 'designer/activeItem',
        })
    }
}
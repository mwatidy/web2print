import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
    data () {
        return {
            PAGE: 'PAGE',
            CONTAINER: 'CONTAINER',
            GROUP: 'GROUP',
            TEXT: 'TEXT',
            section: {
                ASSETS: 'Assets',
                DESIGN: 'Design',
                TEST: 'Test'
            },
        }
    },
    methods: {
        ...mapMutations({
            updateActive: 'designer/update_active',
        }),
        samePath (item) {
            return item.path
                        === (this.activeItem && this.activeItem.path)
        },
        addSelectionClass (element) {
            return this.samePath(element) ? 'border-blue-500' : 'hover:border-green-400 cursor-pointer'
        }
    },
    computed: {   
        designer_mode () {
            return this.activeSection === 'Design'
        },      
        ...mapState({
            activeSection: state => state.designer.activeSection,
            pages: state => state.designer.tree.elements,
        }),
        ...mapGetters({ 
            activeItem: 'designer/activeItem',
        })

    }
}
import { mapState, mapMutations } from 'vuex'

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
            refreshDesign: 'designer/refresh',
        })
    },
    computed: {   
        designer_mode () {
            return this.activeSection === 'Design'
        },      
        ...mapState({
            activeSection: state => state.designer.activeSection,
            activeItem: state => state.designer.activeItem,
            pages: state => state.designer.pages,
            refresh: state => state.designer.refresh
        })
    }
}
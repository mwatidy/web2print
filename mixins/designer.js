import { mapState, mapMutations } from 'vuex'

export default {
    data () {
        return {
            section: {
                ASSETS: 'Assets',
                DESIGN: 'Design',
                TEST: 'Test'
            },
            type: {
                PAGE: 'PAGE',
                CONTAINER: 'CONTAINER',
                GROUP: 'GROUP',
                TEXT: 'TEXT'
            }
        }
    },
    methods: {
        ...mapMutations({
            updateActive: 'designer/update_active'
        })
    },
    computed: {   
        designer_mode () {
            return this.activeSection === 'Design'
        },      
        ...mapState({
            activeSection: state => state.designer.activeSection,
            activeItem: state => state.designer.activeItem,
            pages: state => state.designer.pages
        })
    },
}
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
    computed: {
        activeSection () {
            return this.$store.state.designer.activeSection
        }
    }
}
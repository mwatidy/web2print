export default {
    data () {
        return {
            section: {
                ASSETS: 'Assets',
                DESIGN: 'Design',
                TEST: 'Test'
            }
        }
    },
    computed: {
        active_section () {
            return this.$store.state.designer.active_section
        }
    }
}
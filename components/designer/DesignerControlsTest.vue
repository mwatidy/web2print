<template>
<div class="p-8">
    <FormulateForm
        v-model="form"
        :schema="schema"
        @submit="downloadPDF"
    />
</div>
</template>

<script>

const schema = [
    {
        "component": "h3",
        "class": "text-2xl mb-4",
        "children": "Test Form"
    },
    {
        "label": "Your name",
        "name": "name",
        "validation": "required"
    },
    {
        "label": "Your email",
        "name": "email",
        "validation": "bail|required|email",
        // "validation-messages": {
        //     "ends_with": "Please use a .edu email address"
        // }
    },
    {
        "type": "select",
        "label": "Select Address",
        "name": "address",
        "options": ['24 East Gate, NY, 19923', '45 Ave. North, NJ, 23923'],
    },
    {
        "type": "submit",
        "children": "Create PDF"

    }
]

export default {
    data () {
        return {
            form: {},
            schema: schema
        }
    },
    methods: {
        downloadPDF () {
            console.log('downloading PDF')
        }
    }
}
</script>

<style scoped>

</style>
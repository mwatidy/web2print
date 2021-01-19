<template>
    <h1> Test page : Check console </h1>
</template>

<script>
import { Template } from '~/assets/js/classes'
export default {
    created() {

        let template = new Template()
        console.log(template)


    }    
}
</script>
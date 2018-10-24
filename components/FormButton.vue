<template>
    <v-btn color="info" @click="clickFunc" v-show="btnVisible" :disabled="btnDisabled" :name="btnName" router exact>{{ btnText }}</v-btn>
</template>

<script>
export default {
    name: 'FormButton',
    props: {
        btnVisible: Boolean,
        btnDisabled: Boolean,
        btnText: String,
        btnName: String,
        clickFunc: Function,
        link: String
    }
}
</script>

<style>

</style>

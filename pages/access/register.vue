<template>
    <LoginRegisterForm :showBtnOne="false" :showBtnTwo="true" :buttonTextTwo="'Register'" :buttonName="'register'" :title="'Register an account to access the app.'"/>
</template>

<script>
import LoginRegisterForm from '~/components/LoginRegisterForm.vue';

export default {
    components: {
        LoginRegisterForm,
    },
    layout: 'plainLayout',
}
</script>

<style>
</style>
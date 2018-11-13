<template>
    <LoginRegisterForm :showBtnOne="true" :showBtnTwo="false" :buttonText="'Login'" :title="'Login to you account.'"/>
</template>

<script>
import LoginRegisterForm from '~/components/LoginRegisterForm.vue'

export default {
  components: {
    LoginRegisterForm
  },
  layout: 'plainLayout'
}
</script>

<style>
</style>

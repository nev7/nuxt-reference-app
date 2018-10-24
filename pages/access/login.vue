<template>
<LoginRegisterForm :title="title" 
                   :showBtnOne="true" 
                   :showBtnTwo="true" 
                   :buttonText="'Login'" 
                   :buttonTextTwo="'Register'" 
                   :linkTo="'/menu/home'" 
                   :linkToTwo="'/menu/home'"
                   :clickFuncOne="login"
                   :clickFuncTwo="login"/>
</template>

<script>
import LoginRegisterForm from '~/components/LoginRegisterForm.vue'

export default {
  components: {
    LoginRegisterForm
  },
  layout: 'plainLayout',
  data() {
    return {
      title: 'Do you alredy have an account?'
    }
  },
  methods: {
    login() {
      //this.$v.$touch()
      /** 
       * needs functionallity here
      */
    },
    clear() {
      this.$v.$reset()
      this.username = ''
      this.email = ''
      this.checkbox = false
    }
  }
}
</script>

<style>
</style>
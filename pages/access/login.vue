<template>
<LoginRegisterForm :showBtnOne="true" 
                   :showBtnTwo="true" 
                   :buttonText="'Login'" 
                   :buttonTextTwo="'Register'"/>
</template>

<script>
import LoginRegisterForm from '~/components/LoginRegisterForm.vue'
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    LoginRegisterForm
  },
  layout: 'plainLayout',
}
</script>

<style>
</style>
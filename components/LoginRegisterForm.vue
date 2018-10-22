<template>
<v-layout column justify-center align-center>
    <form>
        <h2 :text="title"></h2>
        <v-text-field v-model="email" :error-messages="emailErrors" label="E-mail" required @input="$v.email.$touch()" @blur="$v.email.$touch()"></v-text-field>
        <v-text-field v-model="password" :error-messages="passwordErrors" :counter="15" label="Password" required @input="$v.password.$touch()" @blur="$v.password.$touch()"></v-text-field>
        <v-checkbox v-model="checkbox" :error-messages="checkboxErrors" label="I accept the terms and conditions." required @change="$v.checkbox.$touch()" @blur="$v.checkbox.$touch()"></v-checkbox>
        <!-- <v-btn @click="clear">clear</v-btn> -->
        <FormButton :clickFunc="clickFuncOne" :btnVisible="showBtnOne" :btnDisabled="formErrors" :btnText="buttonText" :btnName="buttonName" :link="linkTo" />
        <span>OR</span>
        <FormButton :clickFunc="clickFuncTwo" :btnVisible="showBtnTwo" :btnText="buttonTextTwo" :btnName="buttonNameTwo" :link="linkToTwo" />
    </form>
</v-layout>
</template>

<script>
import FormButton from '~/components/FormButton.vue'
import { validationMixin } from 'vuelidate'
import { required, maxLength, minLength, email } from 'vuelidate/lib/validators'

export default {
  components: {
    FormButton
  },
  name: 'LoginRegisterForm',
  mixins: [validationMixin],
  props: {
    title: String,
    showBtnOne: Boolean,
    showBtnTwo: Boolean,
    buttonText: String,
    buttonTextTwo: String,
    buttonName: String,
    buttonNameTwo: String,
    linkTo: String,
    linkToTwo: String,
    clickFuncOne: Function,
    clickFuncTwo: Function
  },
  validations: {
    password: { required, maxLength: maxLength(15), minLength: minLength(8) },
    email: { required, email },
    select: { required },
    checkbox: { required }
  },

  data: () => ({
    password: '',
    email: '',
    select: null,
    checkbox: false
  }),
  computed: {
    checkboxErrors() {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      !this.$v.checkbox.required && errors.push('You must agree to continue!')
      return errors
    },
    passwordErrors() {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.maxLength &&
        errors.push('Password must be at most 15 characters long')
      !this.$v.password.minLength &&
        errors.push('Password must be at least 8 characters long')
      !this.$v.password.required && errors.push('Password is required.')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    formErrors() {
      if (
        this.checkboxErrors.length > 0 ||
        this.passwordErrors.length > 0 ||
        this.emailErrors.length > 0 ||
        this.password === '' ||
        this.email === '' ||
        this.checkbox === false
      ) {
        return true
      }

      return false
    }
  },
  created: function() {
    this.formErrors
  }
}
</script>

<style>
</style>

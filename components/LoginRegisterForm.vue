<template>
<v-layout column justify-center align-center>
    <v-form>
        <h2 :text="title"></h2>
        <v-text-field v-model="user.email" label="E-mail" type="text" name="email" placeholder="e.g janedoe@xxxxx.com" :error-messages="errors.collect('email')" v-validate="'required|email'">
        </v-text-field>
        <v-text-field v-model="user.password" :counter="15" label="Password" name="password" :append-icon="showPass ? 'visibility_off' : 'visibility'" :error-messages="errors.collect('password')" v-validate="'required|max:15|min:8'" :type="showPass ? 'text' : 'password'" @click:append="showPass = !showPass">
        </v-text-field>
        <v-checkbox name="checkbox" type="checkbox" v-validate="'required'" :error-messages="errors.collect('checkbox')" :checked="user.terms" @change="checkboxVal" label="I accept the terms and conditions.">
        </v-checkbox>
        <FormButton :clickFunc="login" :btnVisible="showBtnOne" :btnText="buttonText" :btnName="buttonName" />
        <span>OR</span>
        <FormButton :clickFunc="register" :btnVisible="showBtnTwo" :btnText="buttonTextTwo" :btnName="buttonNameTwo" />
    </v-form>
</v-layout>
</template>

<script>
import FormButton from '~/components/FormButton.vue';
import VeeValidate from 'vee-validate';
import Vue from 'vue';
import { mapState } from 'vuex';

Vue.use(VeeValidate)

export default {
    data() {
        return {
            showPass: false,
            disabledBtn: true
        }
    },
    components: {
        FormButton
    },
    name: 'LoginRegisterForm',
    props: {
        title: String,
        showBtnOne: Boolean,
        showBtnTwo: Boolean,
        buttonText: String,
        buttonTextTwo: String,
        buttonName: String,
        buttonNameTwo: String,
    },
    computed: {
        ...mapState(['user'])
    },
    methods: {
        async login() {
            try {
                const res = await this.$validator.validateAll();
                if (res) {
                    this.$router.push('/menu/home');
                }
            } catch (err) {
                console.error(err);
            }
        },
        async register() {
            try {
                this.$router.push('/menu/home');
            } catch (error) {
                
            }
        },
        checkboxVal() {
            this.user.terms = !this.user.terms
        }
    }
}
</script>

<style>
</style>

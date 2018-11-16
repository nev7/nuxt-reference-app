<template>
<v-layout wrap text-xs-center align-center justify-center>
    <v-flex xs6>
        <AlertCustom :aColor="alertColor" :aIcon="alertIcon" :aVisible="alertVisible" :aText="alertText" />
        <v-form>
            <h2>{{ title }}</h2>
            <v-text-field v-model="user.email" prepend-icon="mail" label="E-mail" type="text" name="email" placeholder="e.g jane.doe@xxxxx.com" :error-messages="errors.collect('email')" v-validate="'required|email'">
            </v-text-field>
            <v-text-field v-model="user.username" prepend-icon="person" label="Username" type="text" name="username" :error-messages="errors.collect('username')" v-validate="'required'">
            </v-text-field>
            <v-text-field v-model="user.password" prepend-icon="lock" :counter="15" label="Password" name="password" :append-icon="showPwdIcon ? 'visibility_off' : 'visibility'" :error-messages="errors.collect('password')" v-validate="'required|max:15|min:8'" :type="showPwdIcon ? 'text' : 'password'" @click:append="showPwdIcon = !showPwdIcon">
            </v-text-field>
            <FormButton :clickFunc="login" :btnVisible="showBtnOne" :btnText="buttonText" :btnName="buttonName" :btnDisabled="isLoading" />
            <nuxt-link class="register-link" to="/access/register" v-show="showBtnOne">Don't have an account? Register here.</nuxt-link>
            <FormButton :clickFunc="register" :btnVisible="showBtnTwo" :btnText="buttonTextTwo" :btnName="buttonNameTwo" :btnDisabled="isLoading" />
            <nuxt-link class="register-link" to="/access/login" v-show="showBtnTwo">Already have an account? Login here.</nuxt-link>
        </v-form>
        <LoaderOverlay :isVisible="isLoading" />
    </v-flex>
</v-layout>
</template>

<script>
import FormButton from '~/components/FormButton.vue';
import LoaderOverlay from '~/components/LoaderOverlay.vue';
import AlertCustom from '~/components/AlertCustom.vue';

import {
    mapState,
    mapActions,
    mapMutations
} from 'vuex';

export default {
    data() {
        return {
            showPwdIcon: false,
            alertColor: '',
            alertIcon: '',
            alertVisible: false,
            alertText: '',
            alertDelay: 3000,
        }
    },
    components: {
        FormButton,
        LoaderOverlay,
        AlertCustom
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
    watch: {
        alertVisible(newVal, oldVal) {
            if (this.alertVisible) {
                setTimeout(() => {
                    this.alertVisible = false;
                }, this.alertDelay);
            }
        }
    },
    computed: {
        ...mapState(['user', 'isLoading'])
    },
    methods: {
        ...mapMutations(['USER_LOGGED']),
        ...mapActions(['getUser', 'addUser', 'checkIfExisist']),
        /**
         * Validates form fields and then
         * asynchronously checks if such user exists in the DB
         * if it exsists it logs him/her in and redirects to home page
         */
        async login() {
            try {
                const res = await this.$validator.validateAll();
                if (res) {
                    const response = await this.getUser();
                    if (response.data.length > 0) {
                        this.USER_LOGGED(true);
                        this.$router.push('/menu/home');
                    } else {
                        this.clearForm();
                        this.alertText = 'Wrong credentials please try again.';
                        this.alertVisible = true;
                        this.alertColor = 'error';
                        this.alertIcon = 'error';
                    }
                }
            } catch (err) {
                console.error(err);
            }
        },
         /**
         * Validates form fields and then
         * asynchronously checks if such user exists in the DB
         * if it exsists it creates the user in the DB and redirects to home page
         */
        async register() {
            try {
                const validationResponse = await this.$validator.validateAll();
                if (validationResponse) {
                    const checkUser = await this.checkIfExisist();
                    if (checkUser.data.length < 1) {
                        await this.addUser();
                        this.USER_LOGGED(true);
                        this.$router.push('/menu/home');
                    } else {
                        this.clearForm();
                        this.alertText = 'User already exsists please use different credentials.';
                        this.alertColor = 'error';
                        this.alertIcon = 'error';
                        this.alertVisible = true;
                    }
                }
            } catch (err) {
                console.error(err);
            }
        },
        clearForm() {
            //this.user.email = ''
            this.user.username = ''
            this.user.password = ''
            this.$validator.reset()
        }
    }
}
</script>

<style scoped>
    .register-link {
        display: block;
    }
</style>

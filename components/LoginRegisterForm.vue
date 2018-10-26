<template>
<v-layout column justify-center align-center>
    <v-alert :value="true" color="error" icon="warning" outline v-show="showAlert" transition="scale-transition"> {{ alertMsg }} </v-alert>
    <v-form>
        <h2 :text="title"></h2>
        <v-text-field v-model="user.email" label="E-mail" type="text" name="email" placeholder="e.g jane.doe@xxxxx.com" :error-messages="errors.collect('email')" v-validate="'required|email'">
        </v-text-field>
        <v-text-field v-model="user.username" label="Username" type="text" name="username" :error-messages="errors.collect('username')" v-validate="'required'">
        </v-text-field>
        <v-text-field v-model="user.password" :counter="15" label="Password" name="password" :append-icon="showPwdIcon ? 'visibility_off' : 'visibility'" :error-messages="errors.collect('password')" v-validate="'required|max:15|min:8'" :type="showPwdIcon ? 'text' : 'password'" @click:append="showPwdIcon = !showPwdIcon">
        </v-text-field>
        <FormButton :clickFunc="login" :btnVisible="showBtnOne" :btnText="buttonText" :btnName="buttonName" />
        <span>OR</span>
        <FormButton :clickFunc="register" :btnVisible="showBtnTwo" :btnText="buttonTextTwo" :btnName="buttonNameTwo" />
    </v-form>
</v-layout>
</template>

<script>
import FormButton from '~/components/FormButton.vue';
import {
    mapState,
    mapActions,
    mapMutations
} from 'vuex';

export default {
    data() {
        return {
            showPwdIcon: false,
            showAlert: false,
            alertMsg: '',
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
        ...mapMutations(['USER_LOGGED']),
        ...mapActions(['getUser', 'addUser', 'checkIfExisist']),
        async login() {
            try {
                const res = await this.$validator.validateAll();
                if (res) {
                    const response = await this.getUser();
                    if (response) {
                        this.USER_LOGGED(true);
                        this.$router.push('/menu/home');
                    } else {
                        this.clearForm();
                        this.alertMsg = 'No such user found please try again.';
                        this.showAlert = true;
                        setTimeout(() => {
                            this.showAlert = false
                        }, 3000)
                    }
                }
            } catch (err) {
                console.error(err);
            }
        },
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
                        this.alertMsg = 'User already exsists please use different credentials.';
                        this.showAlert = true;
                        setTimeout(() => {
                            this.showAlert = false
                        }, 3000)
                    }
                }
            } catch (err) {
                console.error(err);
            }
        },
        clearForm() {
            this.name = ''
            this.user.email = ''
            this.user.username = ''
            this.user.password = ''
            this.$validator.reset()
        }
    }
}
</script>

<style>
</style>

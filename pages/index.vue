<template>
<v-layout>
    <v-flex text-xs-center>
        <h1>Welcome to the medical reference app!</h1>
        <p>To start usingthe app please login or register if you dont have an account.</p>
        <v-btn color="info" nuxt to="/access/login">Get Started</v-btn>
        <v-list v-show="loggedIn">Visible</v-list>
    </v-flex>
</v-layout>
</template>

<script>
import { mapState } from 'vuex';

export default {
    layout: 'plainLayout',
    name: 'welcome',
    computed: {
        ...mapState(["loggedIn"])
    }
}
</script>

<style>
</style>

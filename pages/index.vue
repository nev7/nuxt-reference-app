<template>
<v-layout>
    <v-flex text-xs-center>
        <h1>Welcome to the medical reference app!</h1>
        <p>To start usingthe app please login or register if you dont have an account.</p>
        <v-btn color="info" nuxt to="/access/login">Get Started</v-btn>
    </v-flex>
</v-layout>
</template>

<script>

export default {
    layout: 'plainLayout',
    name: 'welcome',
}
</script>

<style>
</style>

<template>
<v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
        <div class="text-xs-center">
        </div>
        <v-card>
            <v-card-title class="headline">Welcome Medicine Reference App</v-card-title>
            <v-card-text>
                <p>The app is tergeted towards medical personal, to facilitate their everyday work</p>
                <hr class="my-3">
            </v-card-text>
            <v-card-actions>
                <v-spacer />
                <v-btn color="info" flat nuxt to="/menu/cat">Continue</v-btn>
            </v-card-actions>
        </v-card>
    </v-flex>
</v-layout>
</template>

<script>

export default {
    components: {}
}
</script>

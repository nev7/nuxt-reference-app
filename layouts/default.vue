<template>
<v-app>
    <v-navigation-drawer :mini-variant="sideNav.miniVariant" :clipped="sideNav.clipped" v-model="sideNav.drawer" fixed app>
        <v-list>
            <v-list-tile v-for="(link, i) in links" :to="link.to" :key="i" router exact>
                <v-list-tile-content>
                    <v-list-tile-title v-text="link.title" />
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
    <v-toolbar :clipped-left="sideNav.clipped" fixed app>
        <v-toolbar-side-icon @click="sideNav.drawer = !sideNav.drawer" />
        <v-toolbar-title>{{ this.user.email }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-menu bottom left>
                <v-btn slot="activator" icon>
                    <v-icon>more_vert</v-icon>
                </v-btn>
                <v-list>
                    <v-list-tile @click="logout">
                        <v-list-tile-title>Log out</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
        </v-toolbar-items>
    </v-toolbar>
    <v-content>
        <v-container>
            <nuxt />
        </v-container>
    </v-content>
    <v-footer :fixed="footer.fixed" app>
        <span>Neven Hristov &copy; 2017</span>
    </v-footer>
</v-app>
</template>

<script>
import {
    mapState,
    mapMutations
} from 'vuex'

export default {
    computed: {
        ...mapState(['links', 'sideNav', 'footer', 'user'])
    },
    methods: {
        ...mapMutations(['USER_LOGGED', 'CLEAR_USER']),
        logout() {
            this.USER_LOGGED(false);
            this.CLEAR_USER();
            this.$router.push('/access/login');
        }
    }
}
</script>

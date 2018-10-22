<template>
<v-app>
    <v-navigation-drawer :mini-variant="sideNav.miniVariant" :clipped="sideNav.clipped" v-model="sideNav.drawer" fixed app>
        <v-list>
            <v-list-tile v-for="(link, i) in links" :to="link.to" :key="i" router exact>
                <!-- <v-list-tile-action>
                    <v-icon v-html="link.icon" />
                </v-list-tile-action> -->
                <v-list-tile-content>
                    <v-list-tile-title v-text="link.title" />
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
    <v-toolbar :clipped-left="sideNav.clipped" fixed app>
        <v-toolbar-side-icon @click="sideNav.drawer = !sideNav.drawer" />
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
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['links', 'sideNav', 'footer'])
  }
}
</script>

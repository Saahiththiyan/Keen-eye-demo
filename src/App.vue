<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h3>KeenEye Demo</h3>
      </div>

      <v-spacer></v-spacer>
      <v-btn to="/" text>
        <v-icon left dark>
          mdi-home
        </v-icon>
        Home
      </v-btn>
      <v-btn to="/news" text>
        <v-icon left dark>
          mdi-magnify
        </v-icon>
        Search
      </v-btn>
      <v-btn text v-on:click="initLogout">
        <v-icon left dark>
          mdi-account
        </v-icon>
        Logout
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
  methods: {
    ...mapActions({
      logout: "auth/logout",
    }),
    initLogout() {
      this.logout();
      this.$router.replace({
        path: "/",
      });
    },
  },
};
</script>

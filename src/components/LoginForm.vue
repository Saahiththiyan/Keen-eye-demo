<template>
  <v-container>
    <v-card class="mx-auto" style="max-width: 500px;">
      <v-toolbar color="deep-purple accent-4" cards dark flat>
        <v-card-title class="title font-weight-regular">
          Sign in
        </v-card-title>
      </v-toolbar>
      <v-form ref="form" v-model="form" class="pa-4 pt-6">
        <v-text-field
          v-model="credentials.username"
          :rules="[rules.required]"
          filled
          color="deep-purple"
          label="Username"
          type="email"
        ></v-text-field>
        <v-text-field
          v-model="credentials.password"
          filled
          color="deep-purple"
          counter="6"
          label="Password"
          style="min-height: 96px"
          type="password"
        ></v-text-field>
      </v-form>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn text @click="$refs.form.reset()">
          Clear
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          :disabled="!form"
          :loading="isLoading"
          class="white--text"
          color="deep-purple accent-4"
          depressed
          v-on:click="initLogin"
        >
          Submit
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    username: undefined,
    form: false,
    credentials: {
      username: "",
      password: "",
    },
    isLoading: false,
    password: undefined,
    rules: {
      length: (len) => (v) =>
        (v || "").length >= len || `Invalid character length, required ${len}`,
      password: (v) =>
        !!(v || "").match(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/
        ) ||
        "Password must contain an upper case letter, a numeric character, and a special character",
      required: (v) => !!v || "This field is required",
    },
  }),

  methods: {
    ...mapActions({
      login: "auth/login",
    }),
    initLogin() {
      this.login(this.credentials);
    },
  },
};
</script>

<style></style>

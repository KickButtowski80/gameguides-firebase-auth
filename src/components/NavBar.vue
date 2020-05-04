<template>
  <div>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>
      <v-spacer></v-spacer>
      <div v-for="item in items" :key="item.text" class="primary--text">
        <v-btn v-text="item.text"></v-btn>
      </div>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { text: "Account", link: "#" },
        { text: "Logout", link: "#" },
        { text: "Create Guide", link: "#" },
        { text: "Login", link: "#" },
        { text: "Signin", link: "#" }
      ]
    };
  }
};
</script>
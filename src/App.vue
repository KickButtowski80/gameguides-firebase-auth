<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-content></v-content>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  name: "App",

  components: {
    "nav-bar": NavBar
  },

  data: () => ({
    //
  })
};
</script>

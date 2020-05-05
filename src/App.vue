<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-content>
      <guide-lists></guide-lists>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import GuideLists from "./components/GuideLists";

export default {
  name: "App",

  components: {
    "nav-bar": NavBar,
    "guide-lists": GuideLists
  },

  data: () => ({
    //
  })
};
</script>

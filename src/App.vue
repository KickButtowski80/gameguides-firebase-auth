<template>
  <v-app>
    <nav-bar></nav-bar>
    <h1>{{ isMessageExisted }}</h1>

    <div v-show="isMessageExisted">
      <snack-bar :snackbar.sync="isMessageExisted"></snack-bar>
    </div>

    <v-content>
      <guide-lists></guide-lists>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import GuideLists from "./components/GuideLists";
import SnackBar from "./components/SnackBar";

export default {
  name: "App",

  components: {
    "nav-bar": NavBar,
    "guide-lists": GuideLists,
    "snack-bar": SnackBar,
  },
  computed: {
    isMessageExisted() {
      return this.$store.getters.message.length > 0;
    },
  },
  
};
</script>

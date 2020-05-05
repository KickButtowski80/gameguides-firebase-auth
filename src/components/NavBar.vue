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
      </div >
      <v-spacer></v-spacer>
      <div id="navbarElements">
        <signup-form></signup-form>
        <login-form></login-form>
        <account-details></account-details>
        <create-guide></create-guide>
      </div>
    </v-app-bar>
  </div>
</template>
<script>
import SignUp from "./SignUp";
import Login from "./Login";
import Account from './Account';
import CreateGuide from './CreateGuide'
export default {
  name: "NavBar",
  components: {
    "signup-form": SignUp,
    "login-form": Login,
    'account-details': Account,
    'create-guide': CreateGuide
  },
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

<style lang="css" scoped>
#navbarElements *{
 display: inline-flex;
 margin: 2px;
}
</style>
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

      <div id="navbarElements">
        <span v-if="userIsAuthenticated">
          <logout-button></logout-button>
          <account-details></account-details>
          <span v-show="admin">
            <create-guide></create-guide>
          </span>
        </span>
        <span v-else>
          <signup-form></signup-form>
          <login-form></login-form>
        </span>
      </div>
    </v-app-bar>
  </div>
</template>
<script>
import SignUp from "./SignUp";
import Login from "./Login";
import LogOut from "./LogOut";
import Account from "./Account";
import CreateGuide from "./CreateGuide";
export default {
  name: "NavBar",
  components: {
    "signup-form": SignUp,
    "login-form": Login,
    "logout-button": LogOut,
    "account-details": Account,
    "create-guide": CreateGuide
  },
  data() {
    return {};
  },
  computed: {
    admin() {
      return this.$store.getters.user.admin !== undefined;
    },
    currentUser() {
      return this.$store.getters.user;
    },
    emptyUser() {
      return Object.keys(this.currentUser).length === 0;
    },
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        Object.keys(this.currentUser).length !== 0
      );
    }
  }
};
</script>

<style lang="css" scoped>
#navbarElements * {
  display: inline-flex;
  margin: 2px;
}
</style>

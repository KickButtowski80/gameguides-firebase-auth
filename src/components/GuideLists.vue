<template>
  <v-container>
    <v-row v-show="!userIsAuthenticated">
      <v-col>
        <v-alert border="left" color="indigo" dark>please login to see the guides list</v-alert>
      </v-col>
    </v-row>
   <span v-show="false">  {{ userIsAuthenticated }}--{{ this.$store.getters.user }}--{{
    guidesListStatus
    }}</span>
  
    <v-row v-show="userIsAuthenticated && admin">
      <v-col>
        <make-anuser-amdin></make-anuser-amdin>
      </v-col>
    </v-row>

    <v-row v-show="userIsAuthenticated">
      <v-col>
        <v-expansion-panels v-if="guidesListStatus">
          <v-expansion-panel v-for="item in guides" :key="item.title">
            <v-expansion-panel-header>
              {{
              item.title
              }}
            </v-expansion-panel-header>
            <v-expansion-panel-content class="lightgrey">
              {{
              item.body
              }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <span v-else>
          <v-alert type="info" icon="mdi-emoticon-sad">Guides List is empty</v-alert>
        </span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MakeAdminVue from "./MakeAdmin.vue";

export default {
  name: "GuideLists",
  components: {
    "make-anuser-amdin": MakeAdminVue
  },
  data() {
    return {
      items: [
        { title: "Guide title1", body: "Lorem ipsum dolor sit amet" },
        { title: "Guide title2", body: "Lorem ipsum dolor sit amet" },
        { title: "Guide title3", body: "Lorem ipsum dolor sit amet" },
        { title: "Guide title4", body: "Lorem ipsum dolor sit amet" }
      ],
      guidesListStatus: false
    };
  },

  computed: {
        admin() {
      return this.$store.getters.user.admin !== undefined;
    },
    userHasAttemptedAuthentication() {
      return this.$store.getters.userHasAttemptedAuthentication;
    },
    currentUserInfo() {
      return this.$store.getters.user;
    },
    guides() {
      return this.$store.getters.guides;
    },
    guidesListEmpty() {
      return this.$store.getters.guides.length === 0;
    },
    userStatus() {
      return this.$store.getters.user;
    },
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        Object.keys(this.$store.getters.user).length !== 0
      );
    }
  },
  watch: {
    guidesListEmpty: {
      handler(oldVal, newVal) {
        if (this.guidesListStatus) this.guidesListStatus = oldVal;
        else this.guidesListStatus = newVal;
      }
    }
  }
};
</script>

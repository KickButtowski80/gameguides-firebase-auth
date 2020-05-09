<template>
  <v-container>
    <v-row v-show="!userIsAuthenticated">
      <v-col>
        <v-alert border="left" color="indigo" dark>
          please login to see the guides list
        </v-alert>
      </v-col>
    </v-row>
    {{ userIsAuthenticated }}--{{ this.$store.getters.user }}--{{ guidesListStatus }}
    <v-row v-show="userIsAuthenticated">
      <v-col>
        <v-expansion-panels v-if="guidesListStatus">
          <v-expansion-panel v-for="item in guides" :key="item.title">
            <v-expansion-panel-header>{{
              item.title
            }}</v-expansion-panel-header>
            <v-expansion-panel-content class="lightgrey">{{
              item.body
            }}</v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <span v-else>
          <v-alert type="info" icon="mdi-emoticon-sad">
            Guides List is empty
          </v-alert>
        </span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "GuideLists",
  data() {
    return {
      items: [
        { title: "Guide title1", body: "Lorem ipsum dolor sit amet" },
        { title: "Guide title2", body: "Lorem ipsum dolor sit amet" },
        { title: "Guide title3", body: "Lorem ipsum dolor sit amet" },
        { title: "Guide title4", body: "Lorem ipsum dolor sit amet" },
      ],
      guidesListStatus: false,
    };
  },

  computed: {
    currentUserInfo() {
      return this.$store.getters.user;
    },
    guides() {
      return this.$store.getters.guides;
    },
    guidesListEmpty() {
      return this.$store.getters.guides.length === 0;
    },
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        Object.keys(this.$store.getters.user).length !== 0
      );
    },
  },
  watch: {
    guidesListEmpty: {
      handler(oldVal, newVal) {
        alert(oldVal+ "---" + newVal + "+++" + this.guidesListStatus)
        if(this.guidesListStatus)
        this.guidesListStatus = oldVal;
        else
        this.guidesListStatus = newVal;
      },
    },
  },
};
</script>

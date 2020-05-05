<template>
  <v-container>
    <v-row>
      <v-col>{{currentUserInfo}}</v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-expansion-panels>
          <v-expansion-panel v-for="item in items" :key="item.title">
            <v-expansion-panel-header>{{item.title}}</v-expansion-panel-header>
            <v-expansion-panel-content class="lightgrey">{{item.body}}</v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
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
        { title: "Guide title4", body: "Lorem ipsum dolor sit amet" }
      ]
    };
  },
  computed: {
    currentUserInfo() {
      return this.$store.getters.user;
    }
  }
};
</script>
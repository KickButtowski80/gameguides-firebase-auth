<template>
  <v-container>
    <v-row>
      <v-col>{{ currentUserInfo }}</v-col>
    </v-row>
    <v-row>
      <v-col>
        <span v-if="emptyGuides">
          <v-alert type="info" icon="mdi-emoticon-sad">
            Guides List is empty
          </v-alert>
        </span>
        <v-expansion-panels v-else>
          <v-expansion-panel v-for="item in guides" :key="item.title">
            <v-expansion-panel-header>{{
              item.title
            }}</v-expansion-panel-header>
            <v-expansion-panel-content class="lightgrey">{{
              item.body
            }}</v-expansion-panel-content>
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
        { title: "Guide title4", body: "Lorem ipsum dolor sit amet" },
      ],
    };
  },
  computed: {
    currentUserInfo() {
      return this.$store.getters.user;
    },
    guides() {
      return this.$store.getters.guides;
    },
    emptyGuides(){
      return this.$store.getters.guides.length === 0 
    }
  },
};
</script>

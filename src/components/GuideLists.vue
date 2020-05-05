<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card max-width="auto" class="mx-auto">
          <v-list>
            <v-list-group v-for="item in items" :key="item.title">
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title v-text="item.body"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Guide title", body: "Lorem ipsum dolor sit amet" },
        { title: "Guide title", body: "Lorem ipsum dolor sit amet" },
        { title: "Guide title", body: "Lorem ipsum dolor sit amet" },
        { title: "Guide title", body: "Lorem ipsum dolor sit amet" }
      ]
    };
  }
};
</script>
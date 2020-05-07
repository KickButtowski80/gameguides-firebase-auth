<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn outlined class="primary z-depth-0 darken" v-on="on"
          >Create Guide</v-btn
        >
      </template>
      <v-form ref="form">
        <v-card>
          <v-card-title>
            <span class="headline">Create Guide</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="title"
                    label="GiudeTitle*"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    v-model="body"
                    label="GuideContent*"
                    required
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false"
              >Cancel</v-btn
            >
            <v-btn color="blue darken-1" text @click="createAGuide"
              >Create</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  name: "CreateGuide",
  data() {
    return {
      dialog: false,
      title: null,
      body: null,
    };
  },
  methods: {
    createAGuide() {
      if (this.$refs.form.validate()) {
        let payload = {
          title: this.title,
          body: this.body,
        };
        this.$store.dispatch("createAGuide", payload);
        this.$refs.form.reset()
        this.dialog = false
      }
    },
  },
};
</script>

<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn outlined class="primary z-depth-0 darken" v-on="on">Account</v-btn>
      </template>
      <v-form ref="form">
        <v-card>
          <v-card-title>
            <span class="headline">Account Details</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">Logged in as: {{ userInfo["email"] }}</v-col>
                <v-col cols="12">Bio {{userBio}}</v-col>
               <v-col>{{userInfo}}</v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">Cancel</v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false">Ok</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </v-row>
</template>
<script>
// import firebase from "firebase/app";
export default {
  name: "Account",
  data() {
    return {
      dialog: false
    };
  },
  methods:{
    adminInfo(){
      // firebase.auth().currentUser.getIdTokenResult()
      // .then((idTokenResult) => {
      //    console.log(idTokenResult.claims)
      // })
      this.$store.getters.user.admin
    },
 
  },
  computed: {

    userInfo() {
      return this.$store.getters.user;
    },
    userBio() {
      return this.$store.getters.bio;
    }
  }
};
</script>
<style lang="css" scoped></style>

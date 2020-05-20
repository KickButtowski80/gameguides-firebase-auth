<template>
  <div class="">
    <v-snackbar top v-model="snackbar">
      {{ getMessage }}
      <v-btn color="pink" text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "SnackBar",
  props: ["snackbar"],
  created() {
    console.log("I am in snackbar", this.$store.getters.message);
  },
  computed: {
    getMessage() {
      return this.$store.getters.message;
    },

  },
  methods:{
      sendSnackStatus(){
          this.$emit('update:snackbar', this.snackbar)
      }
  }
};
</script>

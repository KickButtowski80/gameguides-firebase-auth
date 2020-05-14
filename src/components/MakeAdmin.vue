<template>
  <div id="adminForm">
    <v-form ref="form">
      <v-text-field v-model="email" label="User E-mail" required></v-text-field>
      <v-btn class="btn-small yellow darken-2 z-depth-0" v-on:click="makeAdmin"
        >Make Admin</v-btn
      >
    </v-form>
  </div>
</template>

<script>
import { functions } from "../main";
export default {
  data() {
    return {
      email: null,
    };
  },
  methods: {
    async makeAdmin() {
      // if (this.$refs.form.validate()) {
      try {
        const addAdminRole = functions.httpsCallable("addAdminRole");
        const result = await addAdminRole({ email: this.email });
        console.log("result of adding admin" ,result);
        this.$refs.form.reset();
      } catch (error) {
        console.log("error",error);
      }
      // }
    },
  },
};
</script>

<style lang="scss" scoped>
#adminForm {
  max-width: 300px;
  margin: 40px auto;
}
</style>

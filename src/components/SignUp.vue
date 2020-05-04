<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn outlined class="primary"  v-on="on">Sign Up</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Sign Up Form</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
                           
              <v-col cols="12">
                <v-text-field label="Email*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-col>
      
     
            </v-row>
          </v-container>
        
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Sign up</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
    }),
  }
</script>
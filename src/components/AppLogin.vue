<template>
  <v-container>
    <v-alert
      :value="alert"
      color="lime"
      type="warning">
      Please fill in Email and Password
    </v-alert>
    <v-form @submit.prevent="submit">
      <v-text-field
        v-model="email"
        label="E-mail"
        required
      />

      <v-text-field
        v-model="password"
        label="Password"
        type="password"
        required
      />
      <v-btn
        color="green"
        class="success"
        type="submit">Submit</v-btn>
    </v-form>
  </v-container>
</template>

<script>
    export default {
        data(){
            return{
                email:null,
                password:null,
                alert:false,
            }
        },
        methods:{
            submit(){
                if(!this.email && !this.password){
                    this.alert = true;
                }
                console.log(`Email is ${this.email} and password is ${this.password}`);
            }
        }
    }
</script>

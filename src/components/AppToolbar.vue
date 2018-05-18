<template>
  <v-toolbar color="indigo" dark>
    <v-toolbar-side-icon  @click.stop="drawer = !drawer"></v-toolbar-side-icon>
          <router-link to="/">      
            <v-toolbar-title class="white--text">GSS_Demo</v-toolbar-title>
      </router-link>
    <v-spacer></v-spacer>
    <v-badge right>
      <span slot="badge"></span>
      <v-icon large color="red lighten-1">account_box</v-icon>
    </v-badge>
    <div class="hidden-sm-and-down">
      <v-btn flat>About</v-btn>
      <router-link to="/contact">      
        <v-btn flat>Contact</v-btn>
      </router-link>
      <router-link to="/login">      
        <v-btn flat>Login</v-btn>
      </router-link>
    </div>
    <div class="hidden-md-and-up">
  <v-layout wrap style="height: 200px;">
    <!-- <v-container>
      <v-layout justify-center>
        <v-btn dark color="pink" @click.stop="drawer = !drawer">Toggle</v-btn>
      </v-layout>
    </v-container> -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      absolute
      height="400px"
    >
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" >
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in items" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
    </div>
  </v-toolbar>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ]
      }
    }
  }
</script>
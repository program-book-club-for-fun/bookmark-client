<template>
  <div id="app">
    <span>{{ count }}</span>
    <button @click="increaseCount">increase</button>
    <button @click="decreaseCount">decrease</button>
    <app-toolbar/>
    <router-view/>
    <app-footer style="position:absolute; z-index:-1;"/>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

import AppFooter from "./components/AppFooter";
import AppToolbar from "./components/AppToolbar";
export default {
  name: "App",
  components: {
    AppFooter,
    AppToolbar
  },
  computed: {
    ...mapState(["count"])
  },
  methods: {
    ...mapMutations(["increaseCount", "decreaseCount"])
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

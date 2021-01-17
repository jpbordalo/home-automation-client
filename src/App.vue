<template>
  <div id="app">
    <v-app>
      <v-main>
        <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
        <div class="devices">
          <v-card>
            <LGTV />
          </v-card>
          <v-card>
            <Tuya />
          </v-card>
        </div>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import Tuya from "./components/Tuya/Tuya.vue";
import LGTV from "./components/LGTV/LGTV.vue";

export default {
  name: "App",

  components: {
    Tuya,
    LGTV,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.v-main__wrap > .devices {
  display: flex;
  margin: 20px;
}

.v-main__wrap > .devices > * {
  display: flex;
  flex: 1;
}

.v-main__wrap > .devices > *:not(:first-child) {
  margin-left: 20px;
}
</style>

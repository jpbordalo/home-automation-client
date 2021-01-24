<template>
  <div id="app">
    <v-app>
      <v-main>
        <Toolbar />

        <hr />
        <div class="app__wrapper">
          <div class="app__menu-container">
            <Menu class="app__menu" />
          </div>
          <div class="app__content">
            <!-- <Devices /> -->
            <router-view></router-view>
          </div>
        </div>
      </v-main>
    </v-app>
  </div>
</template>

<script>
// import Devices from "@/components/Devices/Devices.vue";
import Toolbar from "@/components/Toolbar/Toolbar.vue";
import Menu from "@/components/Menu/Menu.vue";

export default {
  name: "App",

  components: {
    Toolbar,
    // Devices,
    Menu,
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

.v-main__wrap {
  display: flex;
  flex-direction: column;
}

.app__wrapper {
  display: flex;
  position: relative;
  flex: 1;
}

.app__menu-container {
  width: 56px;
}

.app__menu-container .app__menu {
  position: absolute;
  z-index: 1;
}

.app__content {
  padding: 10px;
  flex: 1;
}
</style>

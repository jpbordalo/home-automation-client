<template>
  <div id="app">
    <v-app>
      <v-main>
        <NoteEdit v-if="isDialogOpen" @onCancel="closeDialog" />
        <Header />
        <div class="app__wrapper">
          <div class="app__menu-container">
            <Menu class="app__menu" />
          </div>
          <div class="app__content">
            <router-view></router-view>
          </div>
        </div>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import NoteEdit from "@/components/Notes/NoteEdit.vue";
import Header from "@/components/Header/Header.vue";
import Menu from "@/components/Menu/Menu.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "App",

  components: {
    NoteEdit,
    Header,
    Menu,
  },

  computed: {
    ...mapState("notes", ["isDialogOpen"]),
  },

  methods: {
    ...mapActions("notes", ["closeDialog"]),
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

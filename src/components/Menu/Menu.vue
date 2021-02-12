<template>
  <v-navigation-drawer permanent expand-on-hover class="menu">
    <v-list nav dense>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-home-automation</v-icon>
        </v-list-item-icon>
        <v-list-item-title>
          <router-link to="/">Home automation</router-link>
        </v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
          <img
            src="@/assets/notes.svg"
            style="width: 20px; display: flex; justify-content: center"
          />
        </v-list-item-icon>
        <v-list-item-title>
          <router-link to="/notes">Notes</router-link>
        </v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-cog</v-icon>
        </v-list-item-icon>
        <v-list-item-title>
          <router-link to="/">Configurations</router-link>
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style scoped>
.menu.v-navigation-drawer {
  background: #373f42;
  background: #272730;
  background: #3c4a5b;
  /* background: #182436; */
  background: none;
  background: #4a5a6f;
  background: #4c5b72;
  background: #333643;
  background: #21232c;

  /* background-image: linear-gradient(180deg, #3e4349, #343c3f); */
}

::v-deep i {
  color: white !important;
  /* color: gray !important; */
}

.v-application a {
  text-decoration: none;
  color: #000;
  color: white;
  /* color: gray; */
}

.v-list-item:hover a {
  color: #000;
  color: white;
}

::v-deep .v-list-item:hover i {
  color: white !important;
}
</style>
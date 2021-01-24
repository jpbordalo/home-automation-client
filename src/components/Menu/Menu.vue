<template>
  <v-navigation-drawer permanent expand-on-hover>
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
a {
  text-decoration: none;
  color: #000;
}
</style>
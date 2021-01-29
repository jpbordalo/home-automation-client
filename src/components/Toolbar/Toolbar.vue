<template>
  <div class="toolbar">
    <div class="item">
      <Voice />
    </div>
    <div class="item">
      <v-btn color="lighten-2" @click="openDialog">
        <img class="lgtv__icon" src="@/assets/notes.svg" style="width: 20px" />
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Voice from "@/components/Voice/Voice.vue";

export default {
  name: "Toolbar",

  components: {
    Voice,
  },

  methods: {
    ...mapActions("notes", ["openDialog"]),
  },
};
</script>

<style scoped>
.toolbar {
  display: flex;
  justify-content: flex-end;
}

.item {
  margin-left: 10px;
}
</style>
<template>
  <v-card
    v-if="isCreateTemplate"
    class="note-list-item note-list-item__new"
    @click="$emit('onNewNote')"
  >
    <v-card-title>New note</v-card-title>
    <v-card-text>
      <v-icon x-large>mdi-plus</v-icon>
    </v-card-text>
  </v-card>

  <v-card v-else class="note-list-item">
    <v-card-title>{{ note.name }}</v-card-title>

    <v-card-text>
      <div class="my-4 subtitle-1">{{ note.shortContent }}</div>
      <div>{{ note.createdAt }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn color="lighten-2" text>Delete</v-btn>
      <!-- <v-btn color="primary lighten-2">Edit</v-btn> -->
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "NotesListItem",

  props: {
    note: {
      type: Object,
      required: false,
    },
  },

  computed: {
    isCreateTemplate() {
      return !this.note || !Object.keys(this.note).length;
    },
  },
};
</script>

<style scoped>
.note-list-item {
  height: 215px;
  cursor: pointer;
}

.note-list-item__new {
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.note-list-item__new .v-card__text {
  /* flex: 1; */
  justify-content: center;
  /* align-items: center; */
  margin-top: 40px;
  display: flex;
}
</style>
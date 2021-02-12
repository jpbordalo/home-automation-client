<template>
  <v-card
    tile
    v-if="isCreateTemplate"
    class="note-list-item note-list-item__new"
    @click="$emit('onNewNote')"
  >
    <v-card-title>New note</v-card-title>
    <v-card-text>
      <v-icon x-large>mdi-plus</v-icon>
    </v-card-text>
  </v-card>

  <v-card tile v-else class="note-list-item">
    <v-card-title>{{ note.name }}</v-card-title>

    <v-card-text>
      <div class="my-4 subtitle-1">{{ note.shortContent }}</div>
      <div>{{ note.createdAt }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions class="note-list-item__actions">
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
  height: 290px;
  cursor: pointer;
  color: #0fbf9d;
  color: #fff;
  color: #cecece;
  background: none;
  /* background: #e9e9e9; */
  background: #4c5b72;
  /* border: 2px solid #fff; */
  background: #3e4355;

  display: flex;
  flex-direction: column;

  /* background: none; */
  /* border: 1px dashed #3e4355; */
  border-color: #fff;
  border-color: #11b0b2;
  /* border-style: solid; */
  /* border-radius: 5px !important; */
}

.note-list-item:hover {
  /* background: #7c91b8; */
}

.note-list-item__new {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  /* background: none; */
  /* border: 2px dashed #fff; */
  color: #fff;
}

::v-deep .v-card__text {
  color: #fff !important;
  flex: 1;
}

.note-list-item__new i {
  color: #fff;
  color: #11b0b2;
}

.note-list-item__new .v-card__text {
  /* flex: 1; */
  justify-content: center;
  /* align-items: center; */
  margin-top: 40px;
  display: flex;
}

.note-list-item__actions {
  display: none;
}

.note-list-item:hover .note-list-item__actions {
  display: block;
  /* color: #fff !important; */
}

.note-list-item:hover ::v-deep .theme--light.v-btn {
  color: #fff !important;
  color: #11b0b2 !important;
}
</style>
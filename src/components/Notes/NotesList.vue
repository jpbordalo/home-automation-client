<template>
  <div>
    <h1>NotesList</h1>
    <div class="notes-list__list">
      <NotesListItem @onNewNote="() => createNewNote(true)" />
      <NotesListItem
        v-for="note in notes"
        :key="note.id"
        :note="note"
        @click.native="() => setCurrentNote(note)"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import NotesListItem from "@/components/Notes/NotesListItem.vue";
import notesService from "@/services/notes/notes.service";

export default {
  name: "NotesList",

  components: {
    NotesListItem,
  },

  data() {
    return {
      notes: [],
    };
  },

  async mounted() {
    try {
      const response = await notesService.getNotes();
      const { data: notes } = response;
      this.notes = notes;
      console.log(".....", notes);
    } catch (error) {
      this.notes = [];
    }
  },

  methods: {
    ...mapActions("notes", ["openDialog", "setCurrentNote"]),

    createNewNote() {
      this.openDialog();
    },
  },
};
</script>

<style scoped>
::v-deep .note-list-item {
  width: calc(calc(100% - 20px) / 3);
  margin-bottom: 10px;
  float: left;
}

::v-deep .note-list-item:not(.note-list-item__new) {
  display: block;
}

::v-deep .notes-list__list .note-list-item:not(:nth-child(3n + 1)) {
  margin-left: 10px;
}

::v-deep .notes-list__list .note-list-item:not(:nth-child(-n + 3)) {
  margin-top: 10px;
}
</style>
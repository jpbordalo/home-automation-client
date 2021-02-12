<template>
  <div class="notes-list">
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
.notes-list {
  padding: 0px 20px;
}

h1 {
  margin-bottom: 20px;
}

::v-deep .note-list-item {
  width: calc(calc(100% - calc(20px * 5)) / 5);
  margin-bottom: 20px;
  float: left;
}

::v-deep .note-list-item:not(.note-list-item__new) {
  /* display: block; */
}

::v-deep .notes-list__list .note-list-item:not(:nth-child(5n + 1)) {
  margin-left: 20px;
}

::v-deep .notes-list__list .note-list-item:not(:nth-child(-n + 5)) {
  margin-top: 20px;
}
</style>
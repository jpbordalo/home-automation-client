<template>
  <v-dialog width="700" :value="true" :persistent="true">
    <v-card>
      <v-card-title class="headline grey lighten-2">{{
        currentNote.name
      }}</v-card-title>
      <v-card-text>
        <quillEditor
          v-if="false"
          :content="content"
          :options="editorOption"
          @ready="onEditorReady($event)"
          @change="onEditorChange($event)"
        />
        <div v-html="currentNote.content"></div>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary lighten-2" text @click="$emit('onCancel')"
          >Cancel</v-btn
        >
        <v-btn color="primary lighten-2" @click="handleSave">Save</v-btn>
        <v-btn color="primary lighten-2" @click="handleSave">Edit</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";
// import notesService from "@/services/notes.service";
import { mapState } from "vuex";

export default {
  name: "NoteEdit",

  components: {
    quillEditor,
  },

  data() {
    return {
      quill: undefined,
      content: undefined,
      shortContent: undefined,
      editorOption: {
        // some quill options
      },
    };
  },

  computed: {
    ...mapState("notes", ["currentNote"]),

    editor() {
      return this.$refs.myQuillEditor.quill;
    },
  },

  methods: {
    open() {},

    onEditorReady(/* quill */) {
      //   console.log("editor ready!", quill);
    },

    onEditorChange({ /* quill, */ html, text }) {
      this.content = html;
      this.shortContent = text;
    },

    handleSave() {
      // $emit('onSave', content);
      console.log(this.content);
      console.log(this.shortContent);
      // notesService.createNote();
    },
  },
};
</script>

<style scoped>
::v-deep .v-dialog {
  height: 100%;
}

.v-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

::v-deep .v-dialog .v-card .v-card__text {
  height: 100%;
  padding: 0;
}

.quill-editor {
  height: 100%;
  display: flex;
  flex-direction: column;
}

::v-deep .ql-toolbar {
  border: none;
  border-bottom: 1px solid #ccc;
}

::v-deep .ql-container {
  border: none;
}
</style>
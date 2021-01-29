import axios from "axios";

const baseUrl = '/notes';

const notesService = {
    getNotes() {
        const url = `${baseUrl}`;
        return axios({
            method: "get",
            url,
        })
    },

    getNoteById(noteId) {
        const url = `${baseUrl}/${noteId}`;
        return axios({
            method: "get",
            url,
        })
    },

    createNote(note) {
        const url = `${baseUrl}`;
        return axios({
            method: "post",
            url,
            data: note
        })
    },
}

export default notesService;
export default {
  namespaced: true,

  state: {
    isDialogOpen: false,
    currentNote: undefined,
  },

  mutations: {
    setDialogVisibility(state, dialogVisibility) {
      state.isDialogOpen = dialogVisibility;
    },
    setCurrentNote(state, note) {
      state.currentNote = note;
    }
  },

  actions: {
    openDialog({ commit }) {
      commit('setDialogVisibility', true);
    },

    closeDialog({ commit }) {
      commit('setDialogVisibility', false);
    },

    setCurrentNote({ commit }, note) {
      commit('setCurrentNote', note);
      commit('setDialogVisibility', !!note);
    },
  }
}
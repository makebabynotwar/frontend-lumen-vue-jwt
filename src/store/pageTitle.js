export default {
  namespaced: true,
  state() {
    return {
      title: 'Title of the App'
    }
  },
  actions: {
    setTitle(context, payload){
      const title = context.getters.getTitle;
      const newTitle = `${payload} | ${title}`;
      document.title = newTitle;
    }
  },
  getters: {
    getTitle(state){
      return state.title;
    }
  }
}
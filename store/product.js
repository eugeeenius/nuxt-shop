export const state = () => {
  url: 'https://frontend-test.idaproject.com/api/'
}

export const actions = {
  async getCategories({ commit }) {

  }
}

export const mutations = {
  setCategories(state, categories) {
    state.categories = categories
  }
}

export const getters = {
  getUrl: state => state.url
}
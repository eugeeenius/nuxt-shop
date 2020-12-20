export const state = () => ({
  categories: [],
})

export const actions = {
  async getCategories({ commit }) {
    const body = await fetch('https://frontend-test.idaproject.com/api/product-category')
    const categories = await body.json()

    commit('setCategories', categories)
  }
}

export const mutations = {
  setCategories(state, categories) {
    state.categories = categories
  },
}

export const getters = {
  categories: state => state.categories
}
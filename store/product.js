export const state = () => ({
  product: []
})

export const actions = {
  async getProducts({ commit }) {
    const product = await fetch('https://frontend-test.idaproject.com/api/product')
      .then(res => res.json())

    commit('setProduct', product)
  }
}

export const mutations = {
  setProduct(state, product) {
    state.product = product
  }
}

export const getters = {
  product: state => state.product
}
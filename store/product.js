export const state = () => ({
  product: []
})

export const actions = {
  async getProducts({ commit }) {
    const product = await fetch('https://frontend-test.idaproject.com/api/product')
      .then(res => res.json())

    commit('setProduct', product)
  },
  // Форматируем цену для корректного отображения
  formatPrice(ctx, price) {
    const priceStr = price.toString();
    const len = priceStr.length;
    return `${priceStr.substr(0, len - 3)} ${priceStr.substr(-3)} ₽`;
  },
}


export const mutations = {
  setProduct(state, product) {
    state.product = product
  }
}

export const getters = {
  product: state => state.product
}
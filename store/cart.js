export const state = () => ({
  cart: [],
  isOpen: false,
})

export const actions = {

}

export const mutations = {
  toggleIsOpen(state) {
    state.isOpen = !state.isOpen
  },
  addProduct(state, product) {
    state.cart.push(product)
  }
}

export const getters = {
  isOpen: state => state.isOpen,
  cart: state => state.cart
}
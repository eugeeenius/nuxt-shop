export const state = () => ({
  cart: [],
  isOpen: false,
})

export const mutations = {
  toggleIsOpen(state) {
    state.isOpen = !state.isOpen
  },
  addProduct(state, product) {
    state.cart.push(product)
  },
  removeProduct(state, id) {
    state.cart = state.cart.filter(el => el.id !== id)
  }
}

export const getters = {
  isOpen: state => state.isOpen,
  cart: state => state.cart
}
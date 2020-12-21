export const state = () => ({
  cart: [],
  isOpen: false,
  isFormValid: false
})

export const mutations = {
  toggleIsOpen(state) {
    state.isOpen = !state.isOpen
  },
  addProduct(state, product) {
    state.cart.push(product)
    localStorage.setItem
  },
  removeProduct(state, id) {
    state.cart = state.cart.filter(el => el.id !== id)
  },
  isValid(state) {
    state.isFormValid = !state.isFormValid
  },
  clearCart(state) {
    state.cart = []
  }
}

export const getters = {
  isOpen: state => state.isOpen,
  cart: state => state.cart,
  isFormValid: state => state.isFormValid
}
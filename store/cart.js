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
    // Добавляем cart в local storage
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  removeProduct(state, id) {
    state.cart = state.cart.filter(el => el.id !== id)
    // Добавляем cart в local storage
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  isValid(state) {
    state.isFormValid = !state.isFormValid
  },
  clearCart(state) {
    state.cart = []
    // Удаляем cart из local storage
    localStorage.clear()
  }
}

export const getters = {
  isOpen: state => state.isOpen,
  cart: state => state.cart,
  isFormValid: state => state.isFormValid
}
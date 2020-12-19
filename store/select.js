export const state = () => ({
  options: [
    { id: 1, name: "цене", text: "По цене" },
    { id: 2, name: "популярности", text: "По популярности" },
  ],
  activeOptionId: 1,
  isVisible: false,
})

export const mutations = {
  setActiveOption(state, id) {
    state.activeOptionId = id
  },
  setIsVisible(state) {
    state.isVisible = !state.isVisible
  }
}

export const actions = {

}

export const getters = {
  options: state => state.options,
  activeOptionId: state => state.activeOptionId,
  isVisible: state => state.isVisible,
}
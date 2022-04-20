export default {
  setProductCard(state, productCard) {
    state.productCards.push(productCard)
  },

  removeProductCardById(state, idCard) {
    state.productCards = state.productCards.filter((item) => item.id !== idCard)
  },
}

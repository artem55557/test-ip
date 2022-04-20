export default {
  addProductCard({ commit }, productCard) {
    commit('setProductCard', productCard)
  },
  deleteProductCard({ commit }, id) {
    commit('removeProductCardById', id)
  },
}

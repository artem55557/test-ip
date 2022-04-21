import api from '~/services/api'
export default {
  addProductCard({ commit }, productCard) {
    api.addNewProductCard(productCard)
    commit('setProductCard', productCard)
  },
  deleteProductCard({ commit }, id) {
    api.removeProductCardById(id)
    commit('removeProductCardById', id)
  },
  fethAllProducts({ commit }) {
    const allProducts = api.getAllProducts()
    commit('setProductCards', allProducts)
  },
}

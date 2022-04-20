export default {
  getAllProducts() {
    const keys = Object.keys(localStorage)
    const productLists = []
    keys.forEach((key) =>
      productLists.push(JSON.parse(localStorage.getItem(key)))
    )
    return productLists
  },

  removeProductCardById(id) {
    localStorage.removeItem(id)
  },

  addNewProductCard(data) {
    const id = data.id
    localStorage.setItem(`${id}`, JSON.stringify(data))
  },
}

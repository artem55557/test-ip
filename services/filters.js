export default {
  numberWithSpaces(x) {
    return x
      .toString()
      .replace(/\s/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  },
}

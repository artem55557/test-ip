export default {
  numberWithSpaces(x) {
    return x
      .toString()
      .replace(/\s/g, '')
      .replace(/\D/, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  },
  numberDeleteSpace(b) {
    return b.toString().replace(/\s/g, '')
  },
}

<template>
  <the-select :items="filters" @change="selectedHandler"></the-select>
</template>
<script>
import TheSelect from '~/components/basic/formElement/TheSelect.vue'
export default {
  components: { TheSelect },
  data() {
    return {
      filters: [
        { value: 'default', label: 'По умолчанию' },
        { value: 'price-min', label: 'По цене min' },
        { value: 'price-max', label: 'По цене max' },
        { value: 'name', label: 'По наименованию' },
      ],
    }
  },
  methods: {
    selectedHandler(filter) {
      this.$router.push({ path: '/', query: { sort: `${filter}` } })
    },
  },
}
</script>

<template>
  <section class="add-product">
    <div class="grid-layout">
      <h1 class="heading-1 col-span-16">Добавление товара</h1>
      <div class="col-span-4">
        <add-product />
      </div>
    </div>
  </section>
</template>

<script>
import AddProduct from '~/components/forms/AddProduct.vue'
export default {
  name: 'IndexPage',
  components: { AddProduct },
}
</script>

<style lang="scss">
.add-product {
  background: rgba(255, 254, 251, 0.8);
  padding: 32px;
}
</style>

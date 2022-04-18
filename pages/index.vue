<template>
  <section class="add-product">
    <div class="add-product__header">
      <h1 class="heading-1">Добавление товара</h1>
      <product-filter />
    </div>
    <div class="grid-layout">
      <div class="add-product__aside">
        <add-product />
      </div>
      <div class="add-product__content">
        <product-card
          v-for="product in productCards"
          :key="product.id"
          :img-link="product.imgLink"
          :title="product.title"
          :description="product.description"
          :price="product.price"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from '~/components/cards/ProductCard.vue'
import AddProduct from '~/components/forms/AddProduct.vue'
import ProductFilter from '~/components/filters/ProductFilter.vue'
export default {
  name: 'IndexPage',
  components: { AddProduct, ProductCard, ProductFilter },
  data() {
    return {
      productCards: [
        {
          id: 0,
          title: 'Наименование товара',
          description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          imgLink: './product-img.jpg',
          price: 10000,
        },
        {
          id: 2,
          title: 'Наименование товара',
          description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          imgLink: './product-img.jpg',
          price: 10000,
        },
        {
          id: 3,
          title: 'Наименование товара',
          description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          imgLink: './product-img.jpg',
          price: 10000,
        },
        {
          id: 4,
          title: 'Наименование товара',
          description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          imgLink: './product-img.jpg',
          price: 10000,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.add-product {
  background: rgba(255, 254, 251, 0.8);
  padding: 32px;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  &__aside {
    grid-column: span 4;

    @media (max-width: 1100px) {
      grid-column: span 6;
    }

    @media (max-width: 900px) {
      grid-column: span 10;
    }
  }
  &__content {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(332px, 1fr));
    grid-column: span 12;

    @media (max-width: 1100px) {
      grid-column: span 10;
    }
  }
}
</style>

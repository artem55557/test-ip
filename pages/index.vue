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
        <transition-group name="product-cards" tag="div">
          <product-card
            v-for="product in productCards"
            :id="product.id"
            :key="product.id"
            :img-link="product.imgLink"
            :title="product.title"
            :description="product.description"
            :price="product.price"
          />
        </transition-group>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductCard from '~/components/cards/ProductCard.vue'
import AddProduct from '~/components/forms/AddProduct.vue'
import ProductFilter from '~/components/filters/ProductFilter.vue'
export default {
  name: 'IndexPage',
  components: { AddProduct, ProductCard, ProductFilter },
  computed: {
    ...mapGetters({
      productCards: 'products/getProductCard',
    }),
  },
}
</script>

<style lang="scss">
.product-cards-enter,
.product-cards-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}
.product-cards-leave-active {
  position: absolute;
}
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
    grid-column: span 12;

    & > div {
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(332px, 1fr));
    }

    @media (max-width: 1100px) {
      grid-column: span 10;
    }
  }
}
</style>

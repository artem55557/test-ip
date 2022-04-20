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
            @delete="openModal"
          />
        </transition-group>
      </div>
    </div>
    <the-modal :is-open="isOpenModal" @ok="confirmModal" @close="closeModal"
      ><template #body
        >Действительно хотите удалить запись?</template
      ></the-modal
    >
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductCard from '~/components/cards/ProductCard.vue'
import AddProduct from '~/components/forms/AddProduct.vue'
import ProductFilter from '~/components/filters/ProductFilter.vue'
import TheModal from '~/components/basic/TheModal.vue'
export default {
  name: 'IndexPage',
  components: { AddProduct, ProductCard, ProductFilter, TheModal },
  data() {
    return {
      isOpenModal: false,
      deleteCardId: '',
      currentSort: 'name',
      mockData: [
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
  computed: {
    ...mapGetters({
      allProductCards: 'products/getProductCard',
    }),
    productCards() {
      if (this.currentSort === 'price-min') {
        return this.sortProductsByPrice(this.allProductCards)
      } else if (this.currentSort === 'price-max') {
        return this.sortProductsByPrice(this.allProductCards).reverse()
      } else if (this.currentSort === 'name') {
        return this.sortProductsByName(this.allProductCards)
      } else {
        return this.allProductCards
      }
    },
  },
  watch: {
    $route(to, from) {
      this.currentSort = to.query.sort
    },
  },
  mounted() {
    this.mockData.forEach((element) => {
      this.$store.dispatch('products/addProductCard', element)
    })
    this.$store.dispatch('products/fethAllProducts')
  },
  methods: {
    sortProductsByPrice(array) {
      const newArray = [...array]
      return newArray.sort((a, b) => {
        return a.price - b.price
      })
    },
    sortProductsByName(array) {
      const newArray = [...array]
      return newArray.sort((a, b) => {
        const nameA = a.title.toLowerCase()
        const nameB = b.title.toLowerCase()
        if (nameA < nameB) return -1
        if (nameA > nameB) return 1
        return 0
      })
    },
    openModal(id) {
      this.isOpenModal = true
      this.deleteCardId = id
    },
    confirmModal() {
      this.isOpenModal = false
      this.deleteProductCard(this.deleteCardId)
    },
    closeModal() {
      this.isOpenModal = false
    },
    deleteProductCard(id) {
      this.$store.dispatch('products/deleteProductCard', id)
    },
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
      // transition: all 0.s ease-in-out;
    }

    @media (max-width: 1100px) {
      grid-column: span 10;
    }
  }
}
</style>

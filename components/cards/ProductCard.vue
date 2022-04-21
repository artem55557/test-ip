<template>
  <div class="product-card">
    <the-button
      :icon="true"
      :icon-only="true"
      class="product-card__delete-btn"
      @click="clickHandler(id)"
      ><template #icon> <svg-icon name="delete" /> </template
    ></the-button>
    <div class="product-card__header">
      <img :src="imgLink" alt="" />
    </div>
    <div class="product-card__body">
      <h2 class="product-card__title heading-2">{{ title }}</h2>
      <p class="product-card__description">{{ description }}</p>
    </div>
    <div class="product-card__footer text-xl text-semibold">
      {{ priseMask }} руб.
    </div>
  </div>
</template>
<script>
import TheButton from '../basic/formElement/TheButton.vue'
import filters from '~/services/filters'
export default {
  name: 'ProductCard',
  components: { TheButton },
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    imgLink: {
      type: String,
      required: true,
    },
    price: {
      type: [String, Number],
      required: true,
    },
  },
  computed: {
    priseMask() {
      return filters.numberWithSpaces(this.price)
    },
  },
  methods: {
    clickHandler(id) {
      this.$emit('delete', id)
    },
  },
}
</script>
<style lang="scss" scoped>
.product-card {
  display: flex;
  flex-direction: column;
  background: $c-white;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  cursor: url(~/assets/sprite/svg/cursor.svg), auto;
  position: relative;

  &__header {
    position: relative;
    overflow: hidden;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  &__delete-btn {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    top: -8px;
    right: -8px;
    z-index: 10;
  }

  &__body {
    padding: 16px;
  }
  &__footer {
    flex-grow: 1;
    padding: 16px;
    display: flex;
    align-items: flex-end;
  }

  &:hover {
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.1),
      0px 6px 15px rgba(0, 0, 0, 0.02);
    .product-card__delete-btn {
      visibility: visible;
      opacity: 1;
    }
  }
}
</style>

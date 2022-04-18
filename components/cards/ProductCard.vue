<template>
  <div class="product-card">
    <the-button :icon="true" :icon-only="true" class="product-card__delete-btn"
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
      {{ price }} руб.
    </div>
  </div>
</template>
<script>
import TheButton from '../basic/formElement/TheButton.vue'
export default {
  name: 'ProductCard',
  components: { TheButton },
  props: {
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
      type: Number,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
.product-card {
  background: $c-white;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  // cursor: url('../assets/sprite/gen/icons#i-cursor'), auto;
  // cursor: url('./cursor.svg'), auto;
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

  &__title {
  }

  &__description {
  }

  &__footer {
    padding: 16px;
  }

  &:hover {
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.1),
      0px 6px 10px rgba(0, 0, 0, 0.02);
    transform: scale(1.01);
    .product-card__delete-btn {
      visibility: visible;
      opacity: 1;
    }
  }
}
</style>

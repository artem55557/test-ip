<template>
  <button class="the-button" :class="styleClass" :disabled="disabled">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'TheButton',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    styleClass() {
      return this.disabled ? `the-button--disabled` : 'the-button--success'
    },
  },
}
</script>

<style lang="scss" scoped>
.the-button {
  font-family: Inter;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 0.9375rem;
  border: none;
  border-radius: 10px;
  width: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &--disabled {
    background: #eeeeee;
    color: #b4b4b4;
  }

  &--success {
    color: #ffffff;
    background: #7bae73;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:hover {
    opacity: 0.8;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
  }
}
</style>

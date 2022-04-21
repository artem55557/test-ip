<template>
  <button
    class="the-button"
    :class="styleClass"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <span v-if="icon" class="the-button__icon"><slot name="icon"></slot></span>
    <span v-if="!iconOnly"><slot name="label"></slot></span>
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
    success: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'button',
      validator(value) {
        return ['submit', 'reset', 'button'].includes(value)
      },
    },
    icon: {
      type: Boolean,
      default: false,
    },
    iconOnly: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    styleClass() {
      let classes = ''
      if (this.disabled) classes += ' the-button--disabled'
      if (this.success) classes += ' the-button--success'
      if (this.iconOnly) classes += ' the-button--icon-only'
      return classes
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
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &__icon {
    display: block;
    width: 16px;
    height: 16px;
  }

  &--disabled {
    background: $c-gray-300;
    color: $c-gray-500;
  }

  &--success {
    color: #ffffff;
    background: $c-green-600;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }

  &--icon-only {
    padding: 8px;
    background: $c-rose-400;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:hover {
    opacity: 0.8;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
  }
}
</style>

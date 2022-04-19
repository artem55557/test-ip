<template>
  <label class="the-input text-sm" :class="styleClass">
    <div class="the-input__label text-xs">{{ label }}</div>
    <component
      :is="htmlTagInput"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :value="value"
      :name="name"
      @input="updateValue($event.target.value)"
      @focus="focusHandler"
      @blur="blurHandler"
    />
    <div v-if="error" class="the-input__error-text text-xxs">{{ error }}</div>
  </label>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    textarea: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    htmlTagInput() {
      return this.textarea ? 'textarea' : 'input'
    },
    styleClass() {
      let classes = ''
      if (this.required) classes += 'the-input--required'
      if (this.error) classes += ' the-input--error'
      return classes
    },
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value)
    },
    focusHandler(e) {
      this.$emit('focus', e)
    },
    blurHandler(e) {
      this.$emit('blur', e)
    },
  },
}
</script>
<style lang="scss" scoped>
.the-input {
  width: 100%;
  position: relative;
  display: block;

  &__label {
    margin-bottom: 4px;
    display: flex;
    align-items: flex-start;
  }

  input,
  textarea {
    background: $c-white;
    border: 1px solid transparent;
    border-radius: 4px;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 16px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;

    &:focus,
    &:active {
      outline: none;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);

      &::placeholder {
        opacity: 0;
        transition: all 0.3s ease-in-out;
      }
    }

    &::placeholder {
      transition: all 0.3s ease-in-out;
      font-size: 0.75rem;
      line-height: 0.9375rem;
      color: $c-gray-500;
    }
  }

  textarea {
    resize: none;
    min-height: 108px;
  }

  &__error-text {
    position: absolute;
    bottom: -12px;
    left: 0;
    color: $c-rose-400;
  }

  &--required {
    .the-input__label::after {
      content: '';
      display: inline-block;
      width: 4px;
      height: 4px;
      margin-top: 1px;
      margin-left: 1px;
      border-radius: 100%;
      background: $c-rose-400;
    }
  }

  &--error {
    input {
      border-color: $c-rose-400;
    }
  }
}
</style>

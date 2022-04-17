<template>
  <label class="the-input text-sm" :class="requiredClass">
    <div class="the-input__label text-xs">{{ label }}</div>
    <component
      :is="htmlTagInput"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :value="value"
      @input="updateValue($event.target.value)"
    />
    <div class="the-input__error-text"></div>
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
    value: {
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
    requiredClass() {
      return this.required ? 'the-input--required' : ''
    },
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value)
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
    background: #fffefb;
    color: #b4b4b4;
    border: 1px solid transparent;
    border-radius: 4px;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 16px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;

    &:focus {
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
      color: #b4b4b4;
    }
  }

  textarea {
    resize: none;
    min-height: 108px;
  }

  &__error-text {
    position: absolute;
    bottom: 0;
    left: 0;
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
      background: #ff8484;
    }
  }
}
</style>

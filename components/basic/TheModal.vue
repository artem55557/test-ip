<template>
  <div v-if="isOpen" class="modal">
    <div class="modal__overlay" @click.self="closeModal">
      <div class="modal__window">
        <div class="modal__header">
          <slot name="header"></slot>
        </div>
        <div class="modal__body">
          <slot name="body"></slot>
        </div>
        <div class="modal__footer">
          <slot name="footer">
            <the-button @click="confirmModal">
              <template #label>Удалить</template>
            </the-button>
            <the-button @click="closeModal">
              <template #label>Отмена</template>
            </the-button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TheButton from '~/components/basic/formElement/TheButton.vue'
export default {
  name: 'TheModal',
  components: { TheButton },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      show: true,
    }
  },
  methods: {
    // closeModal() {
    //   this.show = false
    // },
    closeModal() {
      this.$emit('close')
    },
    confirmModal() {
      this.$emit('ok')
    },
  },
}
</script>
<style lang="scss">
.modal {
  &__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    overflow-y: auto;
  }

  &__window {
    margin: 5rem auto;
    min-width: 310px;
    max-width: 500px;
    width: 50%;
    background-color: $c-white;
    z-index: 1000;
    border-radius: 5px;
  }

  &__header {
    padding: 16px;
  }

  &__body {
    padding: 16px;
    text-align: center;
  }

  &__footer {
    padding: 16px;
    display: flex;
    justify-content: flex-end;
    & > :not(:last-child) {
      margin-right: 16px;
    }
  }
}
</style>

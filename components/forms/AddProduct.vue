<template>
  <form class="form">
    <the-input
      v-for="input in formInputs"
      :key="input.id"
      :label="input.label"
      :placeholder="input.placeholder"
      :required="input.required"
      :textarea="input.textarea"
    ></the-input>
    <the-button :disabled="true">Добавить товар</the-button>
  </form>
</template>
<script>
import TheButton from '~/components/basic/formElement/TheButton.vue'
import TheInput from '~/components/basic/formElement/TheInput.vue'
export default {
  name: 'AddProduct',
  components: { TheInput, TheButton },
  data() {
    return {
      formInputs: [
        {
          id: 0,
          name: 'title',
          label: 'Наименование товара',
          placeholder: 'Введите наименование товара',
          required: true,
        },
        {
          id: 1,
          name: 'description',
          label: 'Описание товара',
          placeholder: 'Введите описание товара',
          required: false,
          textarea: true,
        },
        {
          id: 2,
          name: 'imgLink',
          label: 'Ссылка на изображение товара',
          placeholder: 'Введите ссылку',
          required: true,
        },
        {
          id: 3,
          name: 'price',
          label: 'Цена товара',
          placeholder: 'Введите цену',
          required: true,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.form {
  padding: 24px;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  & * {
    margin-bottom: 16px;
  }
}
</style>

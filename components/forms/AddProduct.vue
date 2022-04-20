<template>
  <form class="form" @submit.prevent="handlerOnSubmit">
    <the-input
      v-for="input in formInputs"
      :key="input.id"
      v-model="formData[input.name]"
      :name="input.name"
      :label="input.label"
      :placeholder="input.placeholder"
      :required="input.required"
      :error="input.error"
      :textarea="input.textarea"
    ></the-input>
    <!-- <input v-model="formData.price" type="text" /> -->
    <the-button
      :disabled="!isValidForm"
      :success="isValidForm"
      :type="'submit'"
      class="w-100"
      ><template #label>Добавить товар</template></the-button
    >
  </form>
</template>
<script>
import { required } from 'vuelidate/lib/validators'
import TheButton from '~/components/basic/formElement/TheButton.vue'
import TheInput from '~/components/basic/formElement/TheInput.vue'
import validators from '~/services/validators'
import filters from '~/services/filters'
export default {
  name: 'AddProduct',
  components: { TheInput, TheButton },
  validations: {
    formData: {
      title: { required },
      imgLink: { required },
      price: { required },
    },
  },
  data() {
    return {
      formData: {
        title: '',
        description: '',
        imgLink: '',
        price: '',
      },
    }
  },
  computed: {
    priceWatch() {
      return this.formData.price
    },
    isValidForm() {
      return !this.$v.$invalid
    },
    formInputs() {
      return [
        {
          id: 0,
          name: 'title',
          label: 'Наименование товара',
          placeholder: 'Введите наименование товара',
          required: true,
          error: validators.requiredErrors(this.$v.formData.title),
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
          error: validators.requiredErrors(this.$v.formData.imgLink),
        },
        {
          id: 3,
          name: 'price',
          label: 'Цена товара',
          placeholder: 'Введите цену',
          required: true,
          error: validators.requiredErrors(this.$v.formData.price),
        },
      ]
    },
  },
  watch: {
    priceWatch(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.formData.price = filters.numberWithSpaces(this.formData.price)
      }
    },
  },
  methods: {
    handlerOnSubmit() {
      const { title, description, imgLink, price } = this.formData
      const data = {
        title,
        description,
        imgLink,
        price: Number(filters.numberDeleteSpace(price)),
        id: Date.now(),
      }
      this.$store.dispatch('products/addProductCard', data)
    },
  },
}
</script>

<style lang="scss" scoped>
.form {
  padding: 24px;
  background: $c-white;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  position: sticky;
  top: 0;

  & * {
    margin-bottom: 16px;
  }
}
</style>

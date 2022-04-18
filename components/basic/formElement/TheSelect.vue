<template>
  <select class="the-select">
    <option v-for="item in items" :key="item.value" :value="item.value">
      {{ item.label }}
    </option>
  </select>
</template>
<script>
export default {
  name: 'TheSelect',
  props: {
    items: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.the-select {
  background: $c-white;
  color: $c-gray-500;
  border: 1px solid transparent;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 10px 28px 10px 16px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  line-height: 1rem;
  appearance: none;
  background: url("data:image/svg+xml,%3Csvg width='8' height='6' viewBox='0 0 8 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.48532 1.24264L4.24268 4.48528L1.00003 1.24264' stroke='%23B4B4B4'/%3E%3C/svg%3E%0A")
    no-repeat right;
  background-position-x: calc(100% - 16px);

  &:focus,
  &:active {
    outline: none;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);
  }
}
</style>

export default {
  requiredErrors(props) {
    if (props.$model) props.$touch()
    if (props.$dirty && !props.required) {
      return 'Поле является обязательным'
    } else {
      return ''
    }
  },
}

import { StyleSheet } from 'react-native'
import { useField } from 'formik'
import theme from '../../../../theme'
import TextInput from './TextInput'
import { Text } from '../../../common'

const styles = StyleSheet.create({
  errorText: {
    marginBottom: 24,
    color: theme.colors.warning,
  },
  errorInput: {
    padding: 6,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: theme.colors.warning,
    borderRadius: 3,
    marginBottom: 6,
  },
})

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error

  return (
    <>
      <TextInput
        style={styles.errorInput}
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  )
}

export default FormikTextInput

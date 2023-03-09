import { StyleSheet, View } from 'react-native'
import theme from '../../../../theme'
import FormikTextInput from './FormikTextInput'
import Text from '../../../Text'
import CustomButton from '../../../CustomButton'

export const RegisterForm = ({ onSubmit, onCancel }) => {
  return (
    <View style={styles.loginForm}>
      <FormikTextInput name={'username'} placeholder="Username" />
      <FormikTextInput
        name={'password'}
        placeholder="Password"
        secureTextEntry={true}
      />
      <FormikTextInput
        name={'passwordConfirm'}
        placeholder="Confirm password"
        secureTextEntry={true}
      />
      <View style={styles.buttonContainer}>
        <CustomButton onPress={onCancel}>
          <Text fontWeight="bold">Cancel</Text>
        </CustomButton>
        <CustomButton onPress={onSubmit}>
          <Text fontWeight="bold">Register</Text>
        </CustomButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary,
  },
  loginForm: {
    width: 'auto',
    flex: 1,
    padding: 12,
    marginTop: 72,
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
  },
  signInButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    padding: 8,
    marginLeft: 12,
  },
  cancelButton: {
    borderColor: 'black',
    borderRadius: 3,
    borderWidth: 1,
    padding: 8,
  },
})

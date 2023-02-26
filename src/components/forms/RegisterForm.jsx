import { Pressable, StyleSheet, View } from 'react-native'
import theme from '../../theme'
import FormikTextInput from '../FormikTextInput'
import Text from '../Text'

export const RegisterForm = ({ onSubmit, onCancel }) => {
  return (
    <View style={styles.loginForm}>
      <FormikTextInput name={'email'} placeholder="Email" />
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
        <Pressable style={styles.cancelButton} onPress={onCancel}>
          <Text color={'primary'} fontWeight="bold">
            Cancel
          </Text>
        </Pressable>
        <Pressable style={styles.signInButton} onPress={onSubmit}>
          <Text color={'secondary'} fontWeight="bold">
            Register
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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

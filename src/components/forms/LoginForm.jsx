import { Pressable, StyleSheet, View } from 'react-native'
import theme from '../../theme'
import FormikTextInput from '../FormikTextInput'
import Text from '../Text'

export const LoginForm = ({ navigate, onSubmit, onCancel }) => {
  return (
    <View style={styles.loginForm}>
      <FormikTextInput name={'username'} placeholder="Username" />
      <FormikTextInput
        name={'password'}
        placeholder="Password"
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
            {'Sign In'}
          </Text>
        </Pressable>
      </View>
      <Pressable onPress={() => navigate('/register')}>
        <Text>Register a new account</Text>
      </Pressable>
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

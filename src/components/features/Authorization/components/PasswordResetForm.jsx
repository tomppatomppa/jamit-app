import { Pressable, StyleSheet, View } from 'react-native'
import theme from '../../../../theme'
import { Text } from '../../../common'
import FormikTextInput from './FormikTextInput'

export const PasswordResetForm = ({ onSubmit }) => {
  return (
    <View style={styles.resetForm}>
      <Text fontSize={'subheading'}>Recovery</Text>
      <Text>
        Enter the code along with your new password in the app and you will be
        prompted to create a new password.
      </Text>
      <FormikTextInput name={'code'} placeholder="Code" />
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
      <Pressable style={styles.codeButton} onPress={onSubmit}>
        <Text color={'secondary'} fontWeight="bold">
          Confirm
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  resetForm: {
    width: 'auto',
    flex: 1,
    padding: 12,
    marginTop: 72,
    justifyContent: 'flex-start',
  },
  codeButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    marginVertical: 10,
    padding: 8,
  },
})

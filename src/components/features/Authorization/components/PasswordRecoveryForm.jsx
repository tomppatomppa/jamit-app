import { StyleSheet, View } from 'react-native'

import CustomButton from '../../../CustomButton'
import Text from '../../../Text'
import FormikTextInput from './FormikTextInput'

export const PasswordRecoveryForm = ({ onSubmit, onCancel }) => {
  return (
    <View style={styles.recoveryForm}>
      <Text>
        To recover your account, enter your username/email address. We will send
        a verification code to your registered email address.
      </Text>

      <FormikTextInput name={'username'} placeholder="Username" />
      <View style={styles.buttonContainer}>
        <CustomButton onPress={onCancel}>
          <Text fontWeight="bold">Cancel</Text>
        </CustomButton>
        <CustomButton onPress={onSubmit}>
          <Text fontWeight="bold">Send</Text>
        </CustomButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  recoveryForm: {
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
})

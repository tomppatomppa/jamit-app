import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import theme from '../../../../theme'
import FormikTextInput from './FormikTextInput'

import { CustomButton, Text } from '../../../common'
export const LoginForm = ({ navigate, onSubmit, onCancel }) => {
  return (
    <View style={styles.loginFormContainer}>
      <FormikTextInput name={'username'} placeholder="Username" />
      <FormikTextInput
        name={'password'}
        placeholder="Password"
        secureTextEntry={true}
      />
      <View style={styles.buttonContainer}>
        <CustomButton onPress={onCancel}>
          <Text fontWeight="bold">Cancel</Text>
        </CustomButton>
        <CustomButton colors="confirm" onPress={onSubmit}>
          <Text fontWeight="bold">Sign In</Text>
        </CustomButton>
      </View>
      <Pressable onPress={() => navigate('/register')}>
        <Text>New User?</Text>
      </Pressable>
      <Pressable onPress={() => navigate('/reset')}>
        <Text>Forgot your password?</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  loginFormContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 100,
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
  buttonLogin: {
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    padding: 8,
    marginLeft: 12,
  },
  buttonCancel: {
    borderColor: 'black',
    borderRadius: 3,
    borderWidth: 1,
    padding: 8,
  },
})

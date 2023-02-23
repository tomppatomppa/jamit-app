import { Formik } from 'formik'
import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { useNavigate } from 'react-router-native'

import theme from '../../theme'
import Text from '../Text'
import * as yup from 'yup'
import FormikTextInput from './FormikTextInput'
import useLogin from '../../hooks/useLogin'
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
})
const initialValues = {
  username: '',
  password: '',
}
const LoginForm = ({ onSubmit, onCancel, isSubmitting }) => {
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
          <Text color={'secondary'} fontWeight="bold">
            Cancel
          </Text>
        </Pressable>
        <Pressable style={styles.signInButton} onPress={onSubmit}>
          <Text color={'secondary'} fontWeight="bold">
            {isSubmitting ? 'loading' : 'Sign In'}
          </Text>
        </Pressable>
      </View>
      <Pressable onPress={() => console.log('create new user')}>
        <Text>New user?</Text>
      </Pressable>
    </View>
  )
}
const Login = () => {
  const send = useLogin()
  const navigate = useNavigate()

  const onSubmit = (credentials) => {
    send(credentials)
  }
  const onCancel = () => {
    navigate(-1)
  }
  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          await sleep(100)
          onSubmit(values)
          setSubmitting(false)
        }}
        onCancel={onCancel}
      >
        {({ handleSubmit, isSubmitting }) => (
          <LoginForm
            isSubmitting={isSubmitting}
            onSubmit={handleSubmit}
            onCancel={onCancel}
          />
        )}
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.secondary,
  },
  loginForm: {
    backgroundColor: 'gray',
    height: '50%',
    width: '77%',
    padding: 24,
    justifyContent: 'center',
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
export default Login

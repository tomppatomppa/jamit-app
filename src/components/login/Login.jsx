import { Formik } from 'formik'
import React, { useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { useNavigate } from 'react-router-native'

import theme from '../../theme'
import Text from '../Text'
import * as yup from 'yup'
import FormikTextInput from './FormikTextInput'
import useLogin from '../../hooks/useLogin'

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .email('Username has to be a valid email')
    .required('Username is required'),
  password: yup.string().required('Password is required'),
})
const initialValues = {
  username: '',
  password: 'secret',
}
export const LoginForm = ({
  createUser = false,
  onSubmit,
  onCancel,

  children,
}) => {
  const navigate = useNavigate()
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
            {createUser ? 'Register' : 'Sign In'}
          </Text>
        </Pressable>
      </View>
      <Pressable onPress={() => navigate('/register')}>
        {createUser ? (
          <Text>Register a new account</Text>
        ) : (
          <Text>New user?</Text>
        )}
        {children}
      </Pressable>
    </View>
  )
}
const Login = () => {
  const [error, setError] = useState('')
  const login = useLogin()
  const navigate = useNavigate()

  const onSubmit = async (credentials) => {
    try {
      await login(credentials)
      navigate(-1)
    } catch (e) {
      setError(JSON.stringify(e.response.data.error))
      setTimeout(() => {
        setError('')
      }, 2000)
    }
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
          onSubmit(values)
          setSubmitting(false)
        }}
        onCancel={onCancel}
      >
        {({ handleSubmit }) => (
          <LoginForm onSubmit={handleSubmit} onCancel={onCancel}>
            <Text color={'warning'}>{error}</Text>
          </LoginForm>
        )}
      </Formik>
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

export default Login

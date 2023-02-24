import { Formik } from 'formik'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigate } from 'react-router-native'
import useLogin from '../../hooks/useLogin'
import theme from '../../theme'

import * as yup from 'yup'

import { LoginForm } from './Login'

import Text from '../Text'
import useRegister from '../../hooks/useRegister'

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().min(8).required('Password is required'),
})
const initialValues = {
  username: '',
  password: 'secret',
}

const RegisterUser = () => {
  const [error, setError] = useState('')
  const register = useRegister()
  const login = useLogin()
  const navigate = useNavigate()

  const onSubmit = async (credentials) => {
    //TODO: error handling
    try {
      await register(credentials)
      login(credentials)
      navigate('/')
    } catch (e) {
      setError(JSON.stringify(e.response.data.error))
      setTimeout(() => {
        setError('')
      }, 2000)
    }
  }
  const onCancel = () => {
    navigate('/')
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
        {({ handleSubmit, isSubmitting }) => (
          <LoginForm
            createUser={true}
            isSubmitting={isSubmitting}
            onSubmit={handleSubmit}
            onCancel={onCancel}
          >
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

export default RegisterUser

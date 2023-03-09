import { Formik } from 'formik'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigate } from 'react-router-native'
import * as yup from 'yup'

import theme from '../../../theme'

import { LoginForm } from './components/LoginForm'
import useLogin from './hooks/useLogin'

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .email('Username has to be a valid email')
    .required('Username is required'),
  password: yup.string().required('Password is required'),
})

const initialValues = {
  username: '',
  password: '',
}

const Login = () => {
  const navigate = useNavigate()
  const { mutate } = useLogin()

  const onSubmit = async (credentials) => {
    mutate(credentials)
  }
  const onCancel = () => {
    navigate('/')
  }

  return (
    <View style={styles.loginContainer}>
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
          <LoginForm
            onSubmit={handleSubmit}
            onCancel={onCancel}
            navigate={navigate}
          />
        )}
      </Formik>
    </View>
  )
}
export default Login

const styles = StyleSheet.create({
  loginContainer: {
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: theme.colors.secondary,
  },
})

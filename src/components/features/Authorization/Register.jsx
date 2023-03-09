import { Formik } from 'formik'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigate } from 'react-router-native'

import * as yup from 'yup'

import useRegister from './hooks/useRegister'
import theme from '../../../theme'

import { RegisterForm } from './components/RegisterForm'

const validationSchema = yup.object().shape({
  username: yup.string().email().required('Username is required'),
  password: yup
    .string()
    .min(8, 'minimum length is 8 characters')
    .max(50, 'maximum length is 50 characters')
    .required('Password is required'),
  passwordConfirm: yup
    .string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password'), null], 'passwords do not match'),
})

const initialValues = {
  username: '',
  password: '',
}

const Register = () => {
  const navigate = useNavigate()

  const { mutate } = useRegister()

  const onSubmit = async (credentials) => {
    console.log(credentials)
    mutate(credentials)
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
          <RegisterForm
            isSubmitting={isSubmitting}
            onSubmit={handleSubmit}
            onCancel={onCancel}
          />
        )}
      </Formik>
    </View>
  )
}
export default Register

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

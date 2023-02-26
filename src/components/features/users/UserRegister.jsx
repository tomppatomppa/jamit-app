import { Formik } from 'formik'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigate } from 'react-router-native'

import * as yup from 'yup'
import useLogin from '../../../hooks/useLogin'
import useRegister from '../../../hooks/useRegister'
import theme from '../../../theme'

import { RegisterForm } from '../../forms/RegisterForm'

const validationSchema = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  password: yup
    .string()
    .min(5, 'minimum length is 5 characters')
    .max(50, 'maximum length is 50 characters')
    .required('Password is required'),
  passwordConfirm: yup
    .string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password'), null], 'passwords do not match'),
})
const initialValues = {
  email: '',
  password: '',
}

const UserRegister = () => {
  const navigate = useNavigate()

  const register = useRegister()
  const { mutate } = useLogin()

  const onSubmit = async (credentials) => {
    try {
      console.log('register')
      await register(credentials)
      mutate(credentials)
    } catch (e) {
      console.log(e)
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
export default UserRegister

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

import { Formik } from 'formik'
import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { useNavigate } from 'react-router-native'
import * as yup from 'yup'

import useLogin from '../../../hooks/useLogin'

import theme from '../../../theme'
import FormikTextInput from '../../FormikTextInput'
import Text from '../../Text'

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
const LoginForm = ({ navigate, onSubmit, onCancel }) => {
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
        <Text>New User?</Text>
      </Pressable>
    </View>
  )
}
const UserLogin = () => {
  const { mutate } = useLogin()
  const navigate = useNavigate()

  const onSubmit = async (credentials) => {
    mutate(credentials)
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

//For testing
export const UserLoginContainer = ({ onSubmit, onCancel, navigate }) => {
  return (
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

export default UserLogin

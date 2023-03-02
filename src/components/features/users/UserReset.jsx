import { Formik } from 'formik'
import React, { useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { useNavigate } from 'react-router-native'
import * as yup from 'yup'
import useRecover from './hooks/useRecover'

import theme from '../../../theme'
import FormikTextInput from '../../FormikTextInput'
import Text from '../../Text'
import useResetPassword from './hooks/useResetPassword'

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .email('Username has to be a valid email')
    .required('To reset your password you need to provide your username'),
})

const validationSchemaReset = yup.object().shape({
  code: yup
    .string()
    .required('Enter the code that was sent to your email address'),
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

const initialValuesReset = {
  code: '',
  password: '',
}
const initialValues = {
  username: '',
}

const PasswordResetForm = ({ onSubmit }) => {
  return (
    <View style={styles.loginForm}>
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
const PasswordRecoveryForm = ({ onSubmit, onCancel }) => {
  return (
    <View style={styles.loginForm}>
      <Text>
        To recover your account, enter your username/email address. We will send
        a verification code to your registered email address.
      </Text>

      <FormikTextInput name={'username'} placeholder="Username" />
      <View style={styles.buttonContainer}>
        <Pressable style={styles.cancelButton} onPress={onCancel}>
          <Text color={'primary'} fontWeight="bold">
            Cancel
          </Text>
        </Pressable>
        <Pressable style={styles.signInButton} onPress={onSubmit}>
          <Text color={'secondary'} fontWeight="bold">
            Send
          </Text>
        </Pressable>
      </View>
    </View>
  )
}
const UserReset = () => {
  const [show, setShow] = useState(false)
  const navigate = useNavigate()
  const { recover } = useRecover()
  const { reset } = useResetPassword()

  const onSubmit = async (username) => {
    recover(username)
  }
  const handleReset = (values) => {
    console.log(values)
    reset(values)
  }
  const onCancel = () => {
    navigate(-1)
  }

  return (
    <View style={styles.container}>
      {show ? (
        <Formik
          initialValues={initialValuesReset}
          validationSchema={validationSchemaReset}
          onSubmit={async (values, { setSubmitting }) => {
            handleReset(values)
            setSubmitting(false)
          }}
          onCancel={onCancel}
        >
          {({ handleSubmit }) => (
            <PasswordResetForm onSubmit={handleSubmit} onCancel={onCancel} />
          )}
        </Formik>
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            onSubmit(values)
            setSubmitting(false)
            resetForm()
          }}
          onCancel={onCancel}
        >
          {({ handleSubmit }) => (
            <PasswordRecoveryForm onSubmit={handleSubmit} onCancel={onCancel} />
          )}
        </Formik>
      )}
      <Pressable style={styles.codeButton} onPress={() => setShow(!show)}>
        <Text color={'secondary'} fontWeight="bold">
          {show ? "I don't have a code" : 'I Have a code'}
        </Text>
      </Pressable>
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

export default UserReset

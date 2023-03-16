import React from 'react'
import { ActivityIndicator, Pressable, StyleSheet, View } from 'react-native'
import { useNavigate } from 'react-router-native'

import { CustomButton, Text } from '../../../common'

import useLogout from '../../Authorization/hooks/useLogout'
import useMe from '../hooks/useMe'
import { DeleteAccountButton } from './DeleteAccountButton'
import ErrorScreen from './ErrorScreen'
import NameField from './NameField'

export const Account = () => {
  const { data, isLoading, isError } = useMe()
  const navigate = useNavigate()
  const { logout } = useLogout()

  const handleLogout = () => {
    logout()
    navigate('/')
  }
  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <Text>loading....</Text>
      </View>
    )
  }
  if (isError) return <ErrorScreen />
  return (
    <View style={styles.container}>
      <Text style={{ alignSelf: 'center', marginBottom: 10, fontSize: 20 }}>
        ACCOUNT
      </Text>
      <View style={styles.divider}>
        <Text fontSize="small" fontWeight="bold">
          Email
        </Text>
        <Text style={styles.textStyle}>{data.username}</Text>
      </View>
      <NameField initialName={data.name} />

      <View style={styles.divider}>
        <Text fontSize="small" fontWeight="bold">
          Account ID
        </Text>
        <Text style={styles.textStyle}>{data.id}</Text>
      </View>
      <View style={styles.divider}>
        <Text fontSize="small" fontWeight="bold">
          Account Status
        </Text>
        <Text style={styles.textStyle}>
          {data.disabled ? 'Disabled' : 'Active'}
        </Text>
      </View>
      <View style={styles.divider}>
        <View style={styles.textStyle}>
          <Pressable onPress={() => console.log('upgrade')}>
            <Text
              style={{
                alignSelf: 'flex-end',
                position: 'absolute',
              }}
            >
              upgrade
            </Text>
          </Pressable>
          <Text fontSize="small" fontWeight="bold">
            Account Type
          </Text>
          {data?.roles?.map((role, index) => (
            <Text key={index}>{role}</Text>
          ))}
        </View>
      </View>
      <View style={{ marginBottom: 100, marginTop: 20 }}>
        <CustomButton onPress={handleLogout}>
          <Text>Logout</Text>
        </CustomButton>
      </View>
      <View>
        <DeleteAccountButton />
      </View>
      <Text>Account Created: {data.createdAt}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  textStyle: {
    marginTop: 2,
    marginBottom: 20,
    backgroundColor: '#f4f4f4',
    color: 'black',
  },
  textEditStyle: {
    marginTop: 2,
    marginBottom: 20,
    fontSize: 20,
    color: 'green',
  },
  divider: {
    borderBottomWidth: 1,
    marginVertical: 15,
  },
})

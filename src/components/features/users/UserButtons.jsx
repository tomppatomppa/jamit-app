import { Alert, Button, Pressable, StyleSheet } from 'react-native'
import { useNavigate } from 'react-router-native'

import theme from '../../../theme'
import Text from '../../Text'
import useLogout from '../Authorization/hooks/useLogout'

export const CustomButton = ({ onPress, title, disabled = false }) => {
  return <Button onPress={onPress} title={title} disabled={disabled} />
}

export const LogoutButton = () => {
  const navigate = useNavigate()
  const logout = useLogout()

  const handleLogout = () => {
    logout()
    navigate('/')
  }
  return <Button onPress={handleLogout} title="Logout" />
}

export const DeleteButton = () => {
  const handleDeleteAccount = () => {
    Alert.alert('Hold on!', 'Are you sure you want to delete this account?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      { text: 'YES', onPress: () => console.log('delete') },
    ])
  }
  return (
    <Pressable
      onPress={handleDeleteAccount}
      style={styles.deleteButton}
      title="Delete Account"
    >
      <Text>DELETE ACCOUNT</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  deleteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: theme.colors.warning,
  },
})

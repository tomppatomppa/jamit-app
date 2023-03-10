import { Alert, Pressable, StyleSheet } from 'react-native'
import theme from '../../../../theme'
import Text from '../../../Text'

export const DeleteAccountButton = () => {
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

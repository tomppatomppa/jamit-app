import { Alert } from 'react-native'
import { useNavigate } from 'react-router-native'
const useAlertMessage = () => {
  const navigate = useNavigate()
  const handleAlert = (values, navigateTo) => {
    Alert.alert(
      'Add Event',
      'Start creating an event by pressing OK',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => navigate(navigateTo),
        },
      ],
      { cancelable: false }
    )
  }
  return { handleAlert }
}

export default useAlertMessage

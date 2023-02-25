import { Button } from 'react-native'
import { useNavigate } from 'react-router-native'
import useLogout from '../../../hooks/useLogout'

export const LoginButton = () => {
  const navigate = useNavigate()

  return <Button onPress={() => navigate('/login')} title="login" />
}

export const LogoutButton = () => {
  const logout = useLogout()

  return <Button onPress={logout} title="Logout" />
}

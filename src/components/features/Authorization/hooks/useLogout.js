import { useQueryClient, useMutation } from '@tanstack/react-query'
import { useContext } from 'react'
import CurrentUserContext from '../../../../contexts/CurrentUserContext'
import { showToast } from '../../../../utils/helpers'
import { logout } from '../../../../services/login'
import useAuthStorage from '../../../../hooks/useAuthStorage'

const useLogout = () => {
  const authStorage = useAuthStorage()
  const queryClient = useQueryClient()
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext)

  const { mutate } = useMutation(logout, {
    onSettled: async () => {
      showToast({
        type: 'success',
        text1: `Logged out ${currentUser.username}`,
      })
      authStorage.removeCurrentUser()
      queryClient.clear()
      setCurrentUser(null)
    },
  })

  return { logout: mutate }
}

export default useLogout

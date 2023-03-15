import { useQueryClient, useMutation } from '@tanstack/react-query'
import { showToast } from '../../../../utils/helpers'
import { logout } from '../../../../services/login'
import useAuthStorage from '../../../../hooks/useAuthStorage'
import useCurrentUser from '../../../../hooks/useCurrentUser'

const useLogout = () => {
  const authStorage = useAuthStorage()
  const queryClient = useQueryClient()
  const { currentUser, setCurrentUser } = useCurrentUser()

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

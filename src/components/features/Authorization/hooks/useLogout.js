import { useQueryClient, useMutation } from '@tanstack/react-query'
import { useContext } from 'react'
import CurrentUserContext from '../../../../contexts/CurrentUserContext'
import { showToast } from '../../../../utils/helpers'
import { logout } from '../../../../services/login'

const useLogout = () => {
  const queryClient = useQueryClient()
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext)

  const { mutate } = useMutation(logout, {
    onSettled: async () => {
      showToast({
        type: 'success',
        text1: `Logged out ${currentUser.username}`,
      })
      queryClient.clear()
      setCurrentUser(null)
    },
  })

  return { logout: mutate }
}

export default useLogout

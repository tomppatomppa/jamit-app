import { useMutation } from '@tanstack/react-query'

import { loginUser } from '../services/events'

const useLogin = () => {
  const loginUserMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      console.log(data)
      //TODO: save token in localstorage
      //TODO: reactQuery to send data
    },
    onError: (error) => {
      console.log(error)
    },
  })

  const send = ({ username, password }) => {
    loginUserMutation.mutate({ username, password })
  }

  return send
}

export default useLogin

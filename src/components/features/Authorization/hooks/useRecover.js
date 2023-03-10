import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

import { BASE_URL } from '../../../../utils/constants'
import { showToast } from '../../../../utils/helpers'

const useRecover = () => {
  const { mutate } = useMutation(
    ({ username }) => axios.post(`${BASE_URL}/api/reset`, { username }),
    {
      onSuccess: async (response) => {
        showToast({
          type: 'success',
          text1: 'Recovery request sent!',
          error: response.data,
        })
      },
    }
  )
  return { recover: mutate }
}

export default useRecover

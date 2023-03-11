import { useMutation, useQueryClient } from '@tanstack/react-query'
import { update } from '../../../../services/me'

const useUpdate = () => {
  const queryClient = useQueryClient()
  return useMutation((values) => update(values), {
    onSuccess: () => {
      queryClient.invalidateQueries(['ME'])
    },
  })
}

export default useUpdate

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { client } from '../../../../utils/config'

const update = async (values) => {
  const response = await client.put(
    `/api/me`,
    { name: values },
    { authorization: true }
  )

  return response.data
}

const useUpdate = () => {
  const queryClient = useQueryClient()
  return useMutation((values) => update(values), {
    onSuccess: () => {
      queryClient.invalidateQueries(['ME'])
    },
  })
}

export default useUpdate

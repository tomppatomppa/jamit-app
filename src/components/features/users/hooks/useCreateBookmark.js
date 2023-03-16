import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addBookmark } from '../../../../services/bookmarks'

const useCreateBookmark = () => {
  const queryClient = useQueryClient()
  const { mutate } = useMutation((data) => addBookmark(data), {
    onSuccess: () => {
      queryClient.refetchQueries(['bookmarks'])
    },
  })

  return { addBookmark: mutate }
}

export default useCreateBookmark

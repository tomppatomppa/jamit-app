import { useQuery } from '@tanstack/react-query'

import { getBookmarks } from '../../../../services/bookmarks'

const useBookmarks = () => {
  const { data } = useQuery({
    queryKey: ['bookmarks'],
    queryFn: () => getBookmarks(),
  })

  return { bookmarks: data }
}

export default useBookmarks

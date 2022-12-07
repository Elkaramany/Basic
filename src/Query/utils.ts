import { queryClient } from './index'

const getQueryData = (key: string): any => queryClient.getQueriesData({ queryKey: [key] })[0][1]

const invalidateQuery = (queryKey: string) => queryClient.invalidateQueries({ queryKey: [queryKey] })

export { getQueryData, invalidateQuery }
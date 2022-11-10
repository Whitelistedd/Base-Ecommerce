import { ProfileInfo } from 'types/GlobalTypes.model'
import { publicRequest } from 'requests'
import { useQuery } from 'react-query'

type getProfileInfoType = () => Promise<ProfileInfo>

export const getProfileInfo: getProfileInfoType = async () => {
  try {
    const response = await publicRequest.get(`/profile`)
    return response.data
  } catch (err) {
    return []
  }
}

export const useProfileInfo = () => {
  return useQuery<ProfileInfo, Error>(['profile'], {
    queryFn: () => getProfileInfo(),
    refetchOnWindowFocus: false,
  })
}

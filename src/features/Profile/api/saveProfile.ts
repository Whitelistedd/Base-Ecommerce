import { InfoType } from 'features/Checkout'
import { publicRequest } from 'requests'

export const saveProfile = async (data: InfoType) => {
  try {
    const res = await publicRequest.post('/profile', data)
    return res
  } catch (err) {
    return err
  }
}

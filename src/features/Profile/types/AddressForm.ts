import { CountriesType } from '@/features/Countries'
import { ProfileInfo } from '@/types/GlobalTypes.model'

export interface AddressFormProps {
  data: ProfileInfo | undefined
  countries: CountriesType | undefined
  setShowAddressForm: (boolean: boolean) => void
  showAddressForm: boolean
}

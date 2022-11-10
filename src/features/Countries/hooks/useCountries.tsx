import { CountriesType } from '../types/Countries'
import { getCountries } from '../api/getCountries'
import { useQuery } from 'react-query'

export const useCountries = (countries?: CountriesType) => {
  return useQuery<CountriesType, Error>(['products'], {
    queryFn: () => getCountries(),
    initialData: countries ? countries : undefined,
    refetchOnWindowFocus: false,
  })
}

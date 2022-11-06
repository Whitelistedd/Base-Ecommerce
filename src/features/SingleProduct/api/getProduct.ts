import { AllColors, AllSizes } from 'data/FiltersData'

import { publicRequest } from 'requests'
import { queryKeyType } from 'types/GlobalTypes.model'

/* функция, чтобы получить выбранный продукт и получить все доступные размеры и цвета */
export const getProduct = async ({ queryKey }: { queryKey?: queryKeyType }) => {
  if (!queryKey) return

  if (queryKey.length === 0) return

  const Id = queryKey[1]
  const res = await publicRequest.get('/product/' + Id)

  const getAvailableColors = await AllColors.filter((color) =>
    res.data.color.includes(color.colorName)
  )
  const getAvailableSizes = await AllSizes.filter((size) =>
    res.data.size.includes(size.title)
  )

  return { ...res.data, size: getAvailableSizes, color: getAvailableColors }
}

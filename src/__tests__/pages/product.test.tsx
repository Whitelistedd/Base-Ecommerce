import { QueryCache, QueryClient } from '@tanstack/react-query'
import {
  renderWithClient,
  wrapWithClient,
} from '../../__mocks__/utils/reactQuery'

import SingleProductPage from '../../pages/product/[id]'
import { TEST_PRODUCT1 } from '@/__mocks__/Product'
import renderer from 'react-test-renderer'
import { useProduct } from '@/features/SingleProduct'
import { wrapWithAll } from '@/__mocks__/utils'

jest.mock('next/router', () => require('next-router-mock'))

const mockedUseProduct = useProduct as jest.Mock

jest.mock('@/features/SingleProduct', () => ({
  useProduct: jest.fn(),
}))

describe('Index page', () => {
  const queryCache = new QueryCache()
  const queryClient = new QueryClient({ queryCache })
  const mockProductData = TEST_PRODUCT1
  it('fetches products with correct params', () => {
    mockedUseProduct.mockImplementation(() => ({
      status: 'success',
      data: mockProductData,
    }))
    renderWithClient(
      queryClient,
      wrapWithAll(<SingleProductPage product={mockProductData} />)
    )

    expect(useProduct).toHaveBeenCalledWith('0', mockProductData)
  })

  describe('while loading', () => {
    it('renders a loader', () => {
      mockedUseProduct.mockImplementation(() => ({
        status: 'loading',
        data: mockProductData,
      }))

      const { getByAltText } = renderWithClient(
        queryClient,
        wrapWithAll(<SingleProductPage product={mockProductData} />)
      )

      expect(getByAltText(/loading.../)).toBeInTheDocument()
    })
  })

  describe('with an error', () => {
    it('renders a error', () => {
      mockedUseProduct.mockImplementation(() => ({
        status: 'error',
        data: mockProductData,
      }))

      const { getByAltText } = renderWithClient(
        queryClient,
        wrapWithAll(<SingleProductPage product={mockProductData} />)
      )

      expect(getByAltText(/Failed/)).toBeInTheDocument()
    })
  })

  it('should match snapshot', () => {
    mockedUseProduct.mockImplementation(() => ({
      status: 'success',
      data: mockProductData,
    }))
    const tree = renderer
      .create(wrapWithAll(<SingleProductPage product={mockProductData} />))
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

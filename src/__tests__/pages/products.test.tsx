import { QueryCache, QueryClient } from '@tanstack/react-query'
import {
  renderWithClient,
  wrapWithClient,
} from '../../__mocks__/utils/reactQuery'

import ProductsListPage from '@/pages/products'
import TEST_PRODUCTS from '@/__mocks__/Products'
import renderer from 'react-test-renderer'
import { useProductsList } from '@/features/Products'
import { wrapWithAll } from '@/__mocks__/utils'

jest.mock('next/router', () => require('next-router-mock'))

const mockedUseProductsList = useProductsList as jest.Mock

jest.mock('@/features/Products', () => ({
  useProductsList: jest.fn(),
}))

describe('Index page', () => {
  const queryCache = new QueryCache()
  const queryClient = new QueryClient({ queryCache })
  const mockProductListData = {
    products: TEST_PRODUCTS,
    page: 1,
    totalPages: 2,
  }
  const filters = {
    color: '',
    size: '',
    gender: '',
    categories: '',
  }
  it('fetches products with correct params', () => {
    mockedUseProductsList.mockImplementation(() => ({
      status: 'success',
      data: mockProductListData,
    }))
    renderWithClient(
      queryClient,
      wrapWithAll(<ProductsListPage productsData={mockProductListData} />)
    )

    expect(useProductsList).toHaveBeenCalledWith(
      mockProductListData,
      1,
      filters
    )
  })

  describe('while loading', () => {
    it('renders a loader', () => {
      mockedUseProductsList.mockImplementation(() => ({
        status: 'loading',
        data: mockProductListData,
      }))

      const { getByAltText } = renderWithClient(
        queryClient,
        wrapWithAll(<ProductsListPage productsData={mockProductListData} />)
      )

      expect(getByAltText(/loading.../)).toBeInTheDocument()
    })
  })

  describe('with an error', () => {
    it('renders a error', () => {
      mockedUseProductsList.mockImplementation(() => ({
        status: 'error',
        data: mockProductListData,
      }))

      const { getByAltText } = renderWithClient(
        queryClient,
        wrapWithAll(<ProductsListPage productsData={mockProductListData} />)
      )

      expect(getByAltText(/Failed/)).toBeInTheDocument()
    })
  })

  it('should match snapshot', () => {
    mockedUseProductsList.mockImplementation(() => ({
      status: 'success',
      data: mockProductListData,
    }))
    const tree = renderer
      .create(
        wrapWithAll(<ProductsListPage productsData={mockProductListData} />)
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

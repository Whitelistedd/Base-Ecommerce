import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import Home from '@/pages/index'
import TEST_PRODUCTS from '../../__mocks__/Products'
import { renderWithClient } from '../../__mocks__/utils'
import renderer from 'react-test-renderer'
import { useProductsList } from '@/features/Products'

const mockedUseProductsList = useProductsList as jest.Mock

jest.mock('../../features/Products', () => ({
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
  it('fetches products with correct params', () => {
    mockedUseProductsList.mockImplementation(() => ({
      status: 'success',
      data: mockProductListData,
    }))
    renderWithClient(
      queryClient,
      <Home productsData={mockProductListData} reviews={[]} />
    )

    expect(useProductsList).toHaveBeenCalledWith(mockProductListData, 1, {})
  })

  describe('while loading', () => {
    it('renders a loader', () => {
      mockedUseProductsList.mockImplementation(() => ({
        status: 'loading',
        data: mockProductListData,
      }))

      const { getByAltText } = renderWithClient(
        queryClient,
        <Home productsData={mockProductListData} reviews={[]} />
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
        <Home productsData={mockProductListData} reviews={[]} />
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
        <QueryClientProvider client={queryClient}>
          <Home productsData={mockProductListData} reviews={[]} />
        </QueryClientProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

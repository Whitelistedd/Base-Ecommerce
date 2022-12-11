import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { renderWithClient, wrapWithClient } from '../../__mocks__/utils'

import Profile from '@/pages/profile'
import profileInfo from '@/__mocks__/profileInfo'
import renderer from 'react-test-renderer'
import { useProfileInfo } from '@/hooks/useProfileInfo'
import { useUser } from '@auth0/nextjs-auth0'
import userData from '@/__mocks__/userData'

const mockedUseUser = useUser as jest.Mock

jest.mock('@auth0/nextjs-auth0', () => ({
  useUser: jest.fn(),
}))

const mockedUseProfileInfo = useProfileInfo as jest.Mock

jest.mock('@/hooks/useProfileInfo', () => ({
  useProfileInfo: jest.fn(),
}))

describe('Profile page', () => {
  const queryCache = new QueryCache()
  const queryClient = new QueryClient({ queryCache })

  it('fetches user info with correct params', () => {
    mockedUseUser.mockImplementation(() => ({
      user: userData,
    }))
    mockedUseProfileInfo.mockImplementation(() => ({
      data: profileInfo,
    }))
    renderWithClient(queryClient, <Profile />)
  })

  describe('while loading', () => {
    it('renders a loader', () => {
      mockedUseUser.mockImplementation(() => ({
        user: userData,
        isLoading: true,
      }))
      mockedUseProfileInfo.mockImplementation(() => ({
        data: profileInfo,
        error: true,
      }))

      const { getByAltText } = renderWithClient(queryClient, <Profile />)

      expect(getByAltText(/loading.../)).toBeInTheDocument()
    })
  })

  describe('with an error', () => {
    it('renders a error', () => {
      mockedUseUser.mockImplementation(() => ({
        user: userData,
        error: true,
        isLoading: false,
      }))
      mockedUseProfileInfo.mockImplementation(() => ({
        data: profileInfo,
        error: true,
      }))

      const { getByAltText } = renderWithClient(queryClient, <Profile />)

      expect(getByAltText(/Failed/)).toBeInTheDocument()
    })
  })

  it('should match snapshot', () => {
    mockedUseUser.mockImplementation(() => ({
      user: userData,
      error: false,
      isLoading: false,
    }))
    mockedUseProfileInfo.mockImplementation(() => ({
      error: false,
      data: profileInfo,
    }))
    const tree = renderer.create(wrapWithClient(<Profile />)).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

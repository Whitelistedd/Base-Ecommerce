import { Provider } from 'react-redux'
import { QueryClientProvider } from '@tanstack/react-query'
import { UserProvider } from '@auth0/nextjs-auth0'
import { createTestQueryClient } from './reactQuery'
import { mockStore } from './reactRedux'

export function wrapWithAll(children: React.ReactNode) {
  const testQueryClient = createTestQueryClient()
  return (
    <Provider store={mockStore}>
      <QueryClientProvider client={testQueryClient}>
        <UserProvider>{children}</UserProvider>
      </QueryClientProvider>
    </Provider>
  )
}

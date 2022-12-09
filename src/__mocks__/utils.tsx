/* eslint-disable react/display-name */

import * as React from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { render } from '@testing-library/react'

const createTestQueryClient = () =>
	new QueryClient({
		defaultOptions: {
			queries: {
				retry: false,
			},
		},
		logger: {
			log: console.log,
			warn: console.warn,
			// eslint-disable-next-line @typescript-eslint/no-empty-function
			error: () => {},
		},
	})

export function renderWithClient(client: QueryClient, ui: React.ReactElement) {
	const { rerender, ...result } = render(
		<QueryClientProvider client={client}>{ui}</QueryClientProvider>
	)
	return {
		...result,
		rerender: (rerenderUi: React.ReactElement) =>
			rerender(
				<QueryClientProvider client={client}>{rerenderUi}</QueryClientProvider>
			),
	}
}

export function createWrapper() {
	const testQueryClient = createTestQueryClient()
	return ({ children }: { children: React.ReactNode }) => (
		<QueryClientProvider client={testQueryClient}>
			{children}
		</QueryClientProvider>
	)
}

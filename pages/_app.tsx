import * as React from 'react'

import { CacheProvider, EmotionCache, Global } from '@emotion/react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from 'assets/GlobalStyles'
import Head from 'next/head'
import { Layout } from '../Layout/Layout'
import { Loading } from 'components/States/Loading/Loading'
import Router from 'next/router'
import Script from 'next/script'
import { ThemeProvider } from '@mui/material/styles'
import { UserProvider } from '@auth0/nextjs-auth0'
import createEmotionCache from 'assets/createEmotionCache'
import theme from 'theme'
import { wrapper } from 'redux/store/store'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  const [queryClient] = React.useState(() => new QueryClient())

  const [loading, setLoading] = React.useState(false)

  Router.events.on('routeChangeStart', () => {
    setLoading(true)
  })

  Router.events.on('routeChangeComplete', () => {
    setLoading(false)
  })

  return (
    <UserProvider>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <Script src="//code.jivo.ru/widget/9fumZ1Wizq" async></Script>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <QueryClientProvider client={queryClient}>
            <Global styles={GlobalStyles} />
            <Layout>
              <>
                {loading && <Loading />}
                <Component {...pageProps} />
              </>
            </Layout>
          </QueryClientProvider>
        </ThemeProvider>
      </CacheProvider>
    </UserProvider>
  )
}

export default wrapper.withRedux(MyApp)

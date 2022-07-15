/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/display-name */
import { useRouter } from 'next/router'
import { useAuth0 } from '@auth0/auth0-react'
import { NextPage } from 'next'

const withAuth = (WrappedComponent: NextPage) => {
  const { isAuthenticated } = useAuth0()

  return (props: any) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== 'undefined') {
      const Router = useRouter()

      // If there is no access token we redirect to "/" page.
      if (!isAuthenticated) {
        Router.replace('/')
        return <></>
      }

      // If this is an accessToken we just render the component that was passed with all its props

      return <WrappedComponent {...props} />
    }

    // If we are on server, return null
    return <></>
  }
}

export default withAuth

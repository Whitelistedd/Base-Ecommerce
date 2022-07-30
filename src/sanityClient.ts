import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: process.env.SANITY_CLIENT_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-07-30',
  token: process.env.SANITY_CLIENT_TOKEN,
  useCdn: true,
})

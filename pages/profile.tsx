import { Failed } from 'components/Failed/Failed'
import Image from 'next/image'
import { Loading } from 'components/Loading/Loading'
import React from 'react'
import { devices } from 'data/MediaQueries'
import styled from 'styled-components'
import { useUser } from '@auth0/nextjs-auth0'

const Profile = () => {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <Loading />
  if (error) return <Failed />

  return (
    <Container>
      {user && (
        <RegisterContainer>
          <ProfileImage>
            <Image
              layout="responsive"
              width={50}
              height={50}
              src={`${user.picture}`}
              alt={`${user.name}`}
            />
          </ProfileImage>
          <h2>{user?.name}</h2>
          <p>{user?.email}</p>
          <p>Current Page is under maintanance</p>
          <Button href={'/api/auth/logout'}>Logout</Button>
        </RegisterContainer>
      )}
    </Container>
  )
}

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
  min-width: 400px;
  text-align: center;
  height: 45%;
  @media only screen and (max-width: ${devices.Tablet}px) {
    min-width: 200px;
  }
`

const ProfileImage = styled.div`
  width: 50px;
  border-radius: 50%;
  img {
    border-radius: 50%;
  }
`

const Button = styled.a`
  background-color: #282828;
  border: none;
  padding: 15px 20px;
  color: #fff;
  padding: 14px 28px;
  font-size: 15px;
  width: 100%;
  letter-spacing: 0.2em;
  font-weight: 700;
  cursor: pointer;
  margin-top: 10px;
`

const Container = styled.div`
  display: flex;
  height: 89vh;
  justify-content: center;
  align-items: center;
  background-color: white;
  font-family: sans-serif;
`
export default Profile

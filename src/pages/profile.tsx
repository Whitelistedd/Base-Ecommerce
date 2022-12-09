import { AddressForm } from '@/features/Profile/components/AddressForm'
import { Failed } from '@/components/States/Failed/Failed'
import { Header } from '@/features/Profile'
import { Loading } from '@/components/States/Loading/Loading'
import { NextPage } from 'next'
import { devices } from '@/data/MediaQueries'
import styled from 'styled-components'
import { useCountries } from '@/features/Countries'
import { useProfileInfo } from '@/hooks/useProfileInfo'
import { useState } from 'react'
import { useUser } from '@auth0/nextjs-auth0'

const Profile: NextPage = () => {
	const { user, error, isLoading } = useUser()

	const [showAddressForm, setShowAddressForm] = useState(false)

	const countries = useCountries()
	const profileInfo = useProfileInfo()
	const profileData = profileInfo.data && profileInfo.data

	if (isLoading || profileInfo.isLoading) return <Loading />
	if (error || profileInfo.error) return <Failed />

	console.log(error, isLoading)

	return (
		<Container>
			<AddressForm
				showAddressForm={showAddressForm}
				setShowAddressForm={setShowAddressForm}
				countries={countries.data}
				data={profileInfo.data}
			/>
			{user && (
				<RegisterContainer>
					<Header />
					<Desc>Welcome back, {user.name ? user?.name : user?.email}</Desc>
					<Info>
						<Orders>
							<Title>MY ORDERS</Title>
							<Desc>You havent placed any orders yet</Desc>
						</Orders>
						<Address>
							<Title>PRIMARY ADDRESS</Title>
							<AddressDetails>
								{profileData?.firstName && (
									<Desc>First name: {profileData?.firstName}</Desc>
								)}
								{profileData?.lastName && (
									<Desc>Last name: {profileData.lastName}</Desc>
								)}
								{profileData?.address.address && (
									<Desc>Address 1: {profileData.address.address}</Desc>
								)}
								{profileData?.address.city && (
									<Desc>City: {profileData.address.city}</Desc>
								)}
								{profileData?.address.apartment && (
									<Desc>Apartment: {profileData.address.apartment}</Desc>
								)}
								{profileData?.address.zipCode && (
									<Desc>ZIP code: {profileData.address.zipCode}</Desc>
								)}
								{profileData?.address?.country && (
									<Desc>
										Country/Region:{' '}
										{
											countries?.data?.find(
												(country) => country.id === profileData.address.country
											)?.name
										}
									</Desc>
								)}
							</AddressDetails>
							<Button
								onClick={() => {
									setShowAddressForm(true)
								}}
							>
								EDIT ADDRESSES
							</Button>
						</Address>
					</Info>
				</RegisterContainer>
			)}
		</Container>
	)
}

const RegisterContainer = styled.div`
	padding: 50px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 0.5em;
	width: 100%;
	height: 100%;
	max-width: 1260px;
	color: grey;
	text-align: center;
	@media only screen and (max-width: ${devices.Tablet}px) {
		min-width: 200px;
	}
`

const Orders = styled.div`
	flex: 2;
	height: 100%;
`

const Address = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex: 1;
`

const AddressDetails = styled.div`
	height: 100%;
	width: 100%;
	p {
		margin: 0px;
	}
`

const Info = styled.div`
	display: flex;
	width: 100%;
	text-align: start;
	gap: 50px;
`

const Title = styled.p`
	font-size: 13px;
	letter-spacing: 1px;
	font-weight: 800;
	border-bottom: 1px solid #4e4e4e60;
	padding-bottom: 10px;
	width: 100%;
`

const Desc = styled.p``

const Button = styled.a`
	background-color: #282828;
	border: none;
	padding: 15px 20px;
	color: #fff;
	padding: 14px 28px;
	font-size: 15px;
	letter-spacing: 0.2em;
	font-weight: 700;
	cursor: pointer;
	margin-top: 10px;
	max-width: 211px;
`

const Container = styled.div`
	display: flex;
	justify-content: center;
	background-color: white;
	font-family: sans-serif;

	* {
		font-family: 'FuturaLight';
	}
`
export default Profile

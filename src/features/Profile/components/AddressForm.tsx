import {
	Container,
	Desc,
	Form,
	Title,
	Wrap,
} from '../assets/AddressForm-styles'

import { AddressFormProps } from '../types/AddressForm'
import { Button } from '@/components/Elements/Button/Button'
import { Close } from '@mui/icons-material'
import { CountryType } from '@/features/Countries'
import { GatheredInput } from '@/features/Checkout/assets/Form-styles'
import { InfoType } from '@/features/Checkout'
import { Input } from '@/components/Forms/Input/Input'
import { MenuItem } from '@mui/material'
import { Select } from '@/components/Forms/Select/Select'
import { saveProfile } from '../api/saveProfile'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

export const AddressForm: React.FC<AddressFormProps> = ({
	data,
	countries,
	setShowAddressForm,
	showAddressForm,
}) => {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<InfoType>()

	const [loading, setLoading] = useState(false)

	const onSubmit = async (Info: InfoType) => {
		setLoading(true)
		await saveProfile(Info)
		setLoading(false)
	}

	return (
		<Container showAddressForm={showAddressForm}>
			<Wrap>
				<Close
					onClick={() => setShowAddressForm(false)}
					sx={{ alignSelf: 'end', '&:hover': { cursor: 'pointer' } }}
				/>
				<Title>EDIT AN ADDRESS</Title>
				<Desc>Please fill in the information below:</Desc>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<Input
						name="firstName"
						required={'Enter a First name'}
						control={control}
						defaultValue={data && data?.firstName}
						type="text"
						placeholder="First name"
						error={errors?.firstName?.message}
					/>
					<Input
						name="lastName"
						required={'Enter a Last name'}
						control={control}
						defaultValue={data && data?.lastName}
						type="text"
						placeholder="Last name"
						error={errors?.lastName?.message}
					/>
					<Input
						name="address.address"
						required={'Enter an address'}
						defaultValue={data && data?.address?.address}
						control={control}
						type="text"
						placeholder="Address"
						error={errors?.address?.address?.message}
					/>
					<Input
						name="address.city"
						required={'Enter a City'}
						defaultValue={data && data?.address.city}
						control={control}
						type="text"
						placeholder="City"
						error={errors?.address?.city?.message}
					/>
					<GatheredInput>
						<Select
							name="address.country"
							control={control}
							defaultValue={data && data?.address.country}
							required={'Select a Region/Country'}
							isClearable
							sx={{ maxHeight: '56px !important' }}
							error={errors?.address?.country?.message}
						>
							{countries?.map((country: CountryType) => (
								<MenuItem key={country.id} value={country.id}>
									{country.name}
								</MenuItem>
							))}
						</Select>
						<Input
							name="address.zipCode"
							required={'Enter a postal code'}
							defaultValue={data && data?.address.zipCode}
							control={control}
							type="text"
							placeholder="Postal code"
							error={errors?.address?.zipCode?.message}
						/>
					</GatheredInput>
					<Input
						defaultValue={data && data?.phoneNumber}
						name="phoneNumber"
						required={'Enter a phone number'}
						valueAsNumber={true}
						control={control}
						type="tel"
						placeholder="Phone"
						error={errors?.phoneNumber?.message}
					/>
					<Button loading={loading} type="submit" sx={{ width: '100%' }}>
						EDIT AN ADDRESS
					</Button>
				</Form>
			</Wrap>
		</Container>
	)
}

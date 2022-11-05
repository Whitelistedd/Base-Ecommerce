import { EmptyContainer, StyledButton } from '../assets/EmptyCart-styles'

import Link from 'next/link'
import React from 'react'
import { Typography } from '@mui/material'

/* компонент, чтобы показать, когда корзина пуста */

export const EmptyCart: React.FC = () => {
  return (
    <EmptyContainer>
      <Typography
        sx={{
          fontSize: 15,
          color: '#979696',
          letterSpacing: '.2em',
          fontWeight: '900',
          fontFamily: 'FuturaLight',
        }}
      >
        YOUR CART IS EMPTY
      </Typography>
      <Link href={'/products'}>
        <StyledButton>SHOP OUR PRODUCTS</StyledButton>
      </Link>
    </EmptyContainer>
  )
}

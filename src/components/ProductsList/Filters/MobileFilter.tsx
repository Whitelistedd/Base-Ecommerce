import { Close } from '@mui/icons-material'
import { Drawer, List } from '@mui/material'
import { useState } from 'react'
import styled from 'styled-components'
import { devices } from '../../../data'
import { Filters } from './Filters'
import { MobileFilterProps } from './Filters.model'

const MobileFilter: React.FC<MobileFilterProps> = ({
  handleFilterChange,
  handleClear,
  filters,
}) => {
  const [open, setOpen] = useState(false)

  /* функция переключения мобильного меню */
  const toggleDrawer = () => {
    setOpen(open ? false : true)
  }

  return (
    <Container>
      <MobileButton onClick={toggleDrawer}>FILTER</MobileButton>
      <Drawer
        onClose={toggleDrawer}
        open={open}
        sx={{ width: '80%', '.MuiDrawer-paper': { width: '80%' } }}
        variant="temporary"
        anchor="right"
      >
        <List sx={{ ml: 3, mt: 1.5, mr: 3 }}>
          <Close onClick={toggleDrawer} sx={{ cursor: 'pointer' }} />
          <FilterContainerMobile>
            <Filters
              handleFilterChange={handleFilterChange}
              handleClear={handleClear}
              filters={filters}
            />
          </FilterContainerMobile>
        </List>
      </Drawer>
    </Container>
  )
}

const FilterContainerMobile = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  margin-right: 0px;
  padding: 1em 0em;
  justify-content: center;
`

const MobileButton = styled.button`
  outline: none;
  border: none;
  padding: 1em 0em;
  width: 100%;
  font-size: 20px;
  border: 1px solid #efefef;
  background: none;
`

const Container = styled.div`
  display: none;
  align-content: center;
  justify-content: center;
  width: 100%;

  @media only screen and (max-width: ${devices.Tablet}px) {
    display: flex;
    ${FilterContainerMobile} {
      display: flex;
    }
  }
`

export default MobileFilter

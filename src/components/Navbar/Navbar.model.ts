export type displayFixedType = boolean

export interface NavMenuProps {
  toggleDrawer: () => void
  open: boolean
  NavMenuItems: {
    path: string
    id: string
    text: string
  }[]
}

export interface NavbarProps {
  className?: string
  homePage: boolean
}

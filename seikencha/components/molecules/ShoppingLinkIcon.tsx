import { IconButton } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

type ShoppingLinkIconProps = {
  url: string
}
export const ShoppingLinkIcon: React.FC<ShoppingLinkIconProps> = (props) => {
  return (
    <IconButton href={props.url}>
      <ShoppingCartIcon />
    </IconButton>
  )
}

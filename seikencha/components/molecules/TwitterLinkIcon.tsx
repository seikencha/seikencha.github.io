import { IconButton } from '@mui/material'
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';

type TwitterLinkIconProps = {
  url: string
}
export const TwitterLinkIcon: React.FC<TwitterLinkIconProps> = (props) => {
  return (
    <IconButton href={props.url}>
      <TwitterIcon />
    </IconButton>
  )
}

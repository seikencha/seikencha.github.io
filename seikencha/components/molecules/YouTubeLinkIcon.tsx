import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import { IconButton } from '@mui/material';

type TwitterLinkIconProps = {
  url: string
}
export const YouTubeLinkIcon: React.FC<TwitterLinkIconProps> = (props) => {
  return (
    <IconButton href={props.url}>
      <YouTubeIcon />
    </IconButton>
  )
}

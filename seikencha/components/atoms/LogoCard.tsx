import { Card, CardMedia } from '@mui/material'
import React from 'react'

type LogoCardProps = {
  height?: number
}
export const LogoCard: React.FC<LogoCardProps> = (props) => {
  return (
    <Card sx={{ boxShadow: 0 }}>
      <CardMedia
        component="img"
        image="/image/logo.png"
        height={props.height ? props.height : 40}
        alt="正弦鍵盤茶屋"
      />
    </Card>
  )
}

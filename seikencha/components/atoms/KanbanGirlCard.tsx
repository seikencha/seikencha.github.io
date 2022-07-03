import { Card, CardMedia } from '@mui/material'
import React from 'react'

type KanbanGirlCardProps = {
  height?: number
}
export const KanbanGirlCard: React.FC<KanbanGirlCardProps> = (props) => {
  return (
    <Card>
      <CardMedia
        component="img"
        image="/image/fuwari_girl.png"
        height={props.height}
        alt="fuwari"
      />
    </Card>
  )
}

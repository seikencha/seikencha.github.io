import { Card, CardMedia } from '@mui/material'
import React from 'react'

export const KanbanGirlCard = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        image="/image/fuwari_girl.png"
        height='600'
        alt="fuwari"
      />
    </Card>
  )
}

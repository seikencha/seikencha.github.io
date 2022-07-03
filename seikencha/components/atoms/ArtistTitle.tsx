import { Box, Typography } from '@mui/material'
import React from 'react'

export const ArtistTitle = () => {
  return (
    <Box display='flex'>
      <Typography
        sx={{
          fontWeightBold: 'FontWeight',
          fontSize: 30,
          fontFamily: 'serif',
          color: '#542218',
          whiteSpace: 'nowrap'
        }}>
        正弦鍵盤茶屋
      </Typography>
      <Typography
        pt={1.5}
        sx={{
          fontWeightBold: 'FontWeight',
          fontSize: 20,
          fontFamily: 'serif',
          color: '#542218',
          whiteSpace: 'nowrap'
        }}>
        公式サイト
      </Typography>
    </Box >
  )
}

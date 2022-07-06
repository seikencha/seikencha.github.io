import { Box, Typography } from '@mui/material'
import React from 'react'

export const Footer = () => {
  return (
    <footer>
      <Box bgcolor='#e4e4e2'>
        <Typography
          variant='h6'
          mt={1}
          px={3}
          sx={{
            fontFamily: 'serif',
            fontSize: 13,
            color: '#542218',
            whiteSpace: 'nowrap'
          }}>
          正弦鍵盤茶屋2022,co.ltd
        </Typography>
      </Box>
    </footer>
  )
}

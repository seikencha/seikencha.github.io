import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { LogoCard } from '../components/atoms/LogoCard'
import { TitleTypography } from '../components/atoms/TitleTypography'
import { AlbumCard } from '../components/organisms/AlbumCard'
import { SeikenchaAppBar } from '../components/organisms/SeikenchaAppBar'

type discType = {
  title: string
  description: string
  image: string
  alt: string
  specialUrl: string
  shoppingUrl: string
  isCD?: boolean
  maxWidth: number
}
const discography = () => {
  const discs: discType[] = [
    {
      title: '螢火を灯す',
      description: '4th album [M3-2021春]',
      image: '/image/albums/4thal.jpeg',
      alt: '4th',
      specialUrl: 'https://seikencha-4th.tumblr.com/',
      shoppingUrl: 'https://seikencha.booth.pm/items/3357537',
      isCD: true,
      maxWidth: 220
    },
    {
      title: 'ふわり舞い散る花びらのように',
      description: '3rd album [M3-2020秋]',
      image: '/image/albums/3rdal.jpeg',
      alt: '3rd',
      specialUrl: 'https://seikencha-3rd.tumblr.com/',
      shoppingUrl: 'https://seikencha.booth.pm/items/2912516',
      maxWidth: 220
    },
    {
      title: '星の雫',
      description: '2nd album [M3-2020春]',
      image: '/image/albums/2ndal.png',
      alt: '2nd',
      specialUrl: 'https://seikencha.tumblr.com/',
      shoppingUrl: 'https://seikencha.booth.pm/items/1856719',
      maxWidth: 220
    },
    {
      title: '落花流水',
      description: '1st album [M3-2019秋]',
      image: '/image/albums/1stal.png',
      alt: '1st',
      specialUrl: 'https://seikencha.wixsite.com/seikencha',
      shoppingUrl: 'https://seikencha.booth.pm/items/1647493',
      maxWidth: 220
    }
  ]
  return (
    <Box>
      <SeikenchaAppBar />
      <Box display='flex' alignItems='center' height={150} >
        <Box ml={4} />
        <LogoCard height={120} />
        <Box ml={4} />
        <TitleTypography title='過去作品' />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container
          justifyContent="center"
          spacing={2} columns={{ xs: 7, sm: 8, md: 14 }}>
          {discs.map((disc, index) => {
            return (
              <Grid key={index} item xs={3}>
                <AlbumCard
                  name={disc.title}
                  description={disc.description}
                  image={disc.image}
                  alt={disc.alt}
                  specialUrl={disc.specialUrl}
                  shoppingUrl={disc.shoppingUrl}
                  isCD={disc.isCD}
                  maxWidth={disc.maxWidth} />
              </Grid>
            )
          })}
        </Grid>
      </Box>
      <Box my={6} />
    </Box>
  )
}

export default discography
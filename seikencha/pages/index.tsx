import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { SeikenchaAppBar } from '../components/molecules/SeikenchaAppBar'
import FuwariGirl from 'material-ui-image'
import { ArtistTitle } from '../components/atoms/ArtistTitle'
import { KanbanGirlCard } from '../components/atoms/KanbanGirlCard'
const Home: NextPage = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (

    <>
      <Head>
        <title>正弦鍵盤茶屋 Official Website</title>
        <meta name="description" content="和と憂いを紡ぐ正弦鍵盤茶屋の公式サイトです" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SeikenchaAppBar />
        <Grid container spacing={2} columns={{ xs: 4, sm: 4, md: 12 }}>
          <Grid item xs={4}>
            {!isMobile && <Box display='flex' mt={40} />}
            <ArtistTitle />
          </Grid>
          <Grid item xs={8}>
            <KanbanGirlCard />
          </Grid>
        </Grid>
      </main>
      <footer>
        <Typography variant='h6' mt={2}>
          正弦鍵盤茶屋2022,co.ltd
        </Typography>
      </footer>
    </>
  )
}

export default Home

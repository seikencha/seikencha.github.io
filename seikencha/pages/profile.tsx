import { Box, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import { DescTypography } from '../components/atoms/DescTypography'
import { KanbanGirlCard } from '../components/atoms/KanbanGirlCard'
import { TitleTypography } from '../components/atoms/TitleTypography'
import { ProfileCard } from '../components/organisms/ProfileCard'
import { SeikenchaAppBar } from '../components/organisms/SeikenchaAppBar'
import TwitterIcon from '@mui/icons-material/Twitter';
import { TwitterLinkIcon } from '../components/molecules/TwitterLinkIcon'
import { YouTubeLinkIcon } from '../components/molecules/YoutubeLinkIcon'

const profile = () => {
  return (
    <Box>
      <SeikenchaAppBar />
      <TitleTypography title='自己紹介' />
      <KanbanGirlCard height={250} />
      <Box display='flex'>
        <TitleTypography
          title='正弦鍵盤茶屋'
          fontSize={30} />
        <Box alignItems='center' justifyContent='center' my={3}>
          <TwitterLinkIcon url='https://twitter.com/seikencha' />
        </Box>
        <Box alignItems='center' justifyContent='center' my={3}>
          <YouTubeLinkIcon url='https://www.youtube.com/channel/UCA9jmCbUl9sN4YNVl__W1VA/videos' />
        </Box>
      </Box>
      <Grid container justifyContent="center" spacing={2} columns={{ xs: 6, sm: 8, md: 12 }}>
        <Grid item xs={6}>
          <DescTypography
            description='和と憂いを紡ぐピアノ＆ボーカルユニット。2018年結成。'
          />
          <DescTypography
            description='2019年M3−2019秋にて1st miniAL「落花流水」をリリース。'
          />
        </Grid>
      </Grid>
      <Box my={8} />
      <TitleTypography
        title='メンバー紹介'
        fontSize={30} />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container justifyContent="center" spacing={2} columns={{ xs: 6, sm: 8, md: 12 }}>
          <Grid item xs={4}>
            <ProfileCard
              name='ずんだちきん'
              description='作詞、作曲、編曲、ピアノ、シンセサイザー'
              image='/image/zunchiki.jpg'
              alt='ずんだちきんの近影'
              twitterUrl='https://twitter.com/zunda_chicken' />
          </Grid>
          <Grid item xs={4}>
            <ProfileCard
              name='nononore'
              description='作詞、ボーカル、コーラス'
              image='/image/nononore.jpg'
              alt='nononoreの近影'
              twitterUrl='https://twitter.com/nonohanoreru' />
          </Grid>
        </Grid>
      </Box>
      <Box my={6} />
    </Box>
  )
}
export default profile
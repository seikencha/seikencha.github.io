import { AppBar, Box, IconButton, Typography, Toolbar, Link, Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined'
import React, { useState } from 'react'

type contentType = {
  title: string,
  url: string,
  isExternal?: boolean,
}
export const SeikenchaAppBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const contents: contentType[] = [
    { title: '自己紹介', url: '/profile' },
    { title: '過去作品', url: '/discography' },
    { title: '購入する', url: 'https://seikencha.booth.pm/', isExternal: true },
    { title: 'Twitter', url: 'https://twitter.com/seikencha', isExternal: true },
    { title: 'Youtube', url: 'https://www.youtube.com/channel/UCA9jmCbUl9sN4YNVl__W1VA/videos', isExternal: true },
  ]
  return (
    <Box>
      <AppBar
        sx={{
          backgroundColor: 'white',
          color: '#542218'
        }}
        position='static'>
        <Toolbar>
          <Typography sx={{
            fontSize: 30,
            fontFamily: 'serif'
          }} >
            <Link
              href='/'
              sx={{
                textDecoration: 'none',
                color: '#542218'
              }} >
              正弦鍵盤茶屋
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => {
              setIsMenuOpen(true)
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Menu
        open={isMenuOpen}
        onClose={() => {
          setIsMenuOpen(false)
        }}
        keepMounted
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {contents.map((content, index) => (
          <MenuItem key={index}>
            <Box mx={2}>
              <Link
                href={content.url}
                sx={{
                  textDecoration: 'none',
                  color: '#542218'
                }} >
                <Box display='flex'>
                  <Typography
                    sx={{
                      fontSize: 20,
                      fontFamily: 'serif'
                    }}>
                    {content.title}
                  </Typography>
                  {content.isExternal ? <LinkOutlinedIcon /> : <Box mx={1} />}
                </Box>
              </Link>
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </Box >
  )
}

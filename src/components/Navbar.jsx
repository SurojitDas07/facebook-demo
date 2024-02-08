
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import Adb from '@mui/icons-material/Adb';
// import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';


const StyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}))
const Icons = styled(Box)(({ theme }) => ({
  display:"none" , gap:"20px" , alignItems:"center" ,
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }
}))
const UserBox = styled(Box)(({ theme }) => ({
  display:"flex" , gap:"10px" , alignItems:"center" ,
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
}))



const Navbar = () => {

const [open , setOpen]= useState(false)
  return (
    <AppBar position="sticky">

      <StyleToolbar>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>Bob dev</Typography>
        <Adb sx={{ display: { xs: "block", sm: "none" } }} />
        <Search><InputBase placeholder='search..'></InputBase></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} src='https://scontent.fccu14-1.fna.fbcdn.net/v/t39.30808-6/345438389_249701940882929_1678358638207134193_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=tWXdzz_id3kAX-VXVjC&_nc_ht=scontent.fccu14-1.fna&oh=00_AfDi_14YG-RPreFkmTaJgpb7Jb2JwtAoaaVC010Ot0sWZA&oe=65C5C101'
            onClick={e=>setOpen(true)}
          />
        </Icons>
        <UserBox  onClick={e=>setOpen(true)}>
        <Avatar sx={{ width: 30, height: 30 }} src='https://scontent.fccu14-1.fna.fbcdn.net/v/t39.30808-6/345438389_249701940882929_1678358638207134193_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=tWXdzz_id3kAX-VXVjC&_nc_ht=scontent.fccu14-1.fna&oh=00_AfDi_14YG-RPreFkmTaJgpb7Jb2JwtAoaaVC010Ot0sWZA&oe=65C5C101' />
        <Typography variant='span'>Bob</Typography>
        </UserBox>
      </StyleToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=> setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>

    </AppBar>
  )
}

export default Navbar
import React from 'react'
import { Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography} from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const Post = () => {
  return (
    <Card sx={{margin:5}} >
    <CardHeader
      avatar={
        <Avatar sx={{ width: 30, height: 30 }} src='https://scontent.fccu14-1.fna.fbcdn.net/v/t39.30808-6/345438389_249701940882929_1678358638207134193_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=tWXdzz_id3kAX-VXVjC&_nc_ht=scontent.fccu14-1.fna&oh=00_AfDi_14YG-RPreFkmTaJgpb7Jb2JwtAoaaVC010Ot0sWZA&oe=65C5C101'
         />
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title="Surojit Das"
      subheader="September 14, 2016"
    />
    <CardMedia
      component="img"
      height="20%"
      image="https://images.unsplash.com/photo-1709418354357-a75ccbb90a3d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />        </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
     
    </CardActions>
  
  </Card>
  )
}

export default Post
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
      image="https://scontent.fccu14-1.fna.fbcdn.net/v/t39.30808-6/323887470_909813640455346_881052384357561917_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=DAs56fuSfRcAX9EWaKf&_nc_oc=AQkO973_IaJYIUxBGRQmfT8abbOg7Cgfkqd7CWMdzuYusJM9dWYYJLnk3ruJNWczkxQ&_nc_ht=scontent.fccu14-1.fna&oh=00_AfBaS2yrHo7FLrnJoITFFFYrKjje3Hp49csxpxcUVSJArA&oe=65C52A69"
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
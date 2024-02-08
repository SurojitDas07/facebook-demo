import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant='h6' fontWeight={300}>Online Friends</Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src="https://scontent.fccu14-1.fna.fbcdn.net/v/t39.30808-6/310456324_1638912929840230_4890491670920867454_n.jpg?stp=dst-jpg_s851x315&_nc_cat=104&ccb=1-7&_nc_sid=3d9721&_nc_ohc=xCZe4xqR_5gAX-1E89L&_nc_ht=scontent.fccu14-1.fna&oh=00_AfA3_3LxfTmCtdhrjBgnDBmzPt6mwsXch28eDtizTfumOg&oe=65C62872" />
          <Avatar alt="Travis Howard" src="https://scontent.fccu14-1.fna.fbcdn.net/v/t39.30808-6/318845505_1188639661861877_7568743607624487732_n.jpg?stp=c332.0.1384.1384a_dst-jpg_s851x315&_nc_cat=108&ccb=1-7&_nc_sid=3d9721&_nc_ohc=Pp8PtnuFy-AAX9P9OLl&_nc_ht=scontent.fccu14-1.fna&oh=00_AfBp3wqcFHgDqLSY3NkPbUDOSh9yfYpSHukP-ATdfBUVSQ&oe=65C62EAF" />
          <Avatar alt="Cindy Baker" src="https://scontent.fccu14-1.fna.fbcdn.net/v/t39.30808-6/305576952_1435741740263607_4383031014647059460_n.jpg?stp=c0.165.1000.1000a_dst-jpg_s851x315&_nc_cat=102&ccb=1-7&_nc_sid=3d9721&_nc_ohc=Fm4mcGNBwlQAX_DJlP2&_nc_ht=scontent.fccu14-1.fna&oh=00_AfDWVWkfurEIqJRW9CLyXlbOui4kyqzbzM5QVybldpxweA&oe=65C49CCB" />
          <Avatar alt="Agnes Walker" src="https://scontent.fccu14-1.fna.fbcdn.net/v/t39.30808-6/342191046_130251439962997_8214956641009000889_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=PqCfgjcJR_AAX8dvsna&_nc_oc=AQk0pF_59VrKWIDOjth0O57HxLIBOCTVOCCdKEjpcoGWGcVpYWAxelaK_aetSOOXlv4&_nc_ht=scontent.fccu14-1.fna&oh=00_AfCuUKjsegO0qZlrh67-xPBpQCMEf8Qa4pCkOv6wutt2YA&oe=65C6447D" />
          <Avatar alt="Trevor Henderson" src="https://scontent.fccu14-1.fna.fbcdn.net/v/t39.30808-6/307946170_3438615999792610_6266069951935297160_n.jpg?stp=dst-jpg_s851x315&_nc_cat=110&ccb=1-7&_nc_sid=3d9721&_nc_ohc=1FFwvi1wrsMAX8W6u7R&_nc_ht=scontent.fccu14-1.fna&oh=00_AfCJlZiz7DBrkZBS2DDWoelQoQzYLUVB_V6bXqqzSZ58gw&oe=65C61302" />
          <Avatar alt="Trevor Henderson" src="https://scontent.fccu14-1.fna.fbcdn.net/v/t39.30808-6/304011271_1124004005186535_1653582112022054997_n.jpg?stp=c0.12.314.314a_dst-jpg_p235x350&_nc_cat=108&ccb=1-7&_nc_sid=3d9721&_nc_ohc=vtE_Ps88PpUAX-FjwJB&_nc_ht=scontent.fccu14-1.fna&oh=00_AfBk0GK-rbAXJzUGNhRv5voLy7DPB8ccBd9itzbPzm9s6Q&oe=65C566BF" />
          <Avatar alt="Trevor Henderson" src="https://scontent.fccu14-1.fna.fbcdn.net/v/t39.30808-6/280671474_1198770020877317_6323605443049067919_n.jpg?stp=dst-jpg_s851x315&_nc_cat=104&ccb=1-7&_nc_sid=3d9721&_nc_ohc=ZHzW4nxGI_YAX8Cgo4A&_nc_ht=scontent.fccu14-1.fna&oh=00_AfAywG09b5OYmcaiZ9EiHEbF53BTtBooJmRE9IHcIy_DyQ&oe=65C491B0" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={300} marginTop={2} mb={0}>Latest Photos</Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img 
            src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
            alt=''
            />
          </ImageListItem>
          <ImageListItem>
            <img 
            src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
            alt=''
            />
          </ImageListItem>
          <ImageListItem>
            <img 
            src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
            alt=''
            />
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={300} marginTop={2} mb={0}>Latest Conversations</Typography>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>


      </Box>
    </Box>
  )
}

export default Rightbar
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import styled from '@emotion/styled';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ImageIcon from '@mui/icons-material/Image';
import DateRangeIcon from '@mui/icons-material/DateRange';

const StyleModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})
const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
})



const Add = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Tooltip onClick={e => setOpen(true)}
                title="Delete" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyleModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280}  bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5} >
                    <Typography variant='h6' color="gray" textAlign="center">Create Post</Typography>
                    <UserBox >
                        <Avatar
                            src='https://scontent.fccu14-1.fna.fbcdn.net/v/t39.30808-6/345438389_249701940882929_1678358638207134193_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=tWXdzz_id3kAX-VXVjC&_nc_ht=scontent.fccu14-1.fna&oh=00_AfDi_14YG-RPreFkmTaJgpb7Jb2JwtAoaaVC010Ot0sWZA&oe=65C5C101'
                            sx={{ width: 30, height: 30 }}
                        />
                        <Typography fontWeight={500} variant='span'>Surojit Das</Typography>
                    </UserBox>
                    <TextField sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        fullWidth
                        multiline
                        rows={3}
                        placeholder='whats on your mind ?'
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3} >
                        <EmojiEmotionsIcon color="primary" />
                        <ImageIcon color="secondary" />
                        <VideoCameraBackIcon color="success" />
                        <PersonAddIcon color="error" />
                    </Stack>
                    <ButtonGroup variant="contained" aria-label="Basic button group" fullWidth>
                        <Button>Post</Button>
                        <Button sx={{width:"100px"}}><DateRangeIcon/></Button>
                    </ButtonGroup>
                </Box>
            </StyleModal>
        </>
    )
}

export default Add
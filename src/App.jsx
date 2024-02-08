import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Rightbar from './components/Rightbar'
import Box from '@mui/material/Box'
import { Stack, ThemeProvider, createTheme } from '@mui/material'
import Add from './components/Add'


function App() {
const [mode , setMode]= useState("light")

const darkTheme = createTheme({
  palette:{
    mode: mode
  }
})


  return (
   <ThemeProvider theme={darkTheme}>

    <Box bgcolor={"background.default"} color={"text.primary"} >
     <Navbar />
     <Stack direction='row' spacing={2} justifyContent="space-between">
      <Sidebar setMode={setMode} mode={mode} />
    <Feed />
    <Rightbar />
     </Stack>
     <Add />
     </Box>
   </ThemeProvider>
  )
}

export default App

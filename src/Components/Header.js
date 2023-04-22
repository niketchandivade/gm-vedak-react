import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import './Header.css'
import { Button } from '@mui/material';

const Header = () => {

  const pages = [
    {label:'Home', href:'/'}, 
    {label:'About us', href:'/aboutus'}, 
    {label:'Gallery', href:'/gallery'}, 
  ];

  return (
    <div className='AppBar'>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <div className='Logo'>
            <img src='logo.png'></img> 
            </div>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             G.M.VEDAK INSTITUTE OF TECHNOLOGY
            </Typography>
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'end'  }}>
            {pages?.map((page, index) => (
            <Button
              key={index}
              sx={{ my: 2, color: 'white', display: 'block' }}
              href={page?.href}
            >
              {page?.label}
            </Button>
            ))}
          </Box>
          </Toolbar>
       </AppBar>
      </Box>
    </div>
  )
}

export default Header
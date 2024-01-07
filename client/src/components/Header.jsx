import React from 'react'
import {AppBar, Toolbar, styled, InputBase, Box} from '@mui/material';
import {Menu as MenuIcon, Search, Tune} from '@mui/icons-material'
import { gmailLogo } from '../constants/constant';

const StyledAppBar = styled(AppBar)({
  background : "#F5F5F5",
  boxShadow: none
})

const SearchWrapper = styled(Box)({
  background: '#EAF1FB',
  marginLeft: 80,
  borderRadius: 8,
  minWidth: 690,
  maxWidth: 720,
  height: 48,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 20px',
  '& > div' : {
    width : '100%',
    padding:'0 10px'
  }
})

const Header = () => {
  
  return (
    <styledAppBar position="static">

      <Toolbar>
        <MenuIcon color="action"/>
        <img src={gmailLogo} alt="Please check your Url" style={{width: 110, marginLeft: 15}} />

        <SearchWrapper>
          {/* box is nothing but a replacement of the div in material ui */}
          <Search color='action'/>
          <InputBase placeholder='Search mail'/>
          <Tune color='action'/>
        </SearchWrapper>
      </Toolbar>
    </styledAppBar>
  )
}

export default Header
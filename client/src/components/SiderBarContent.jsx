import { Box, Button, styled, List, ListItem} from '@mui/material'
import {CreateOutlined} from '@mui/icons-material';
import SIDEBAR_DATA from '../config/sidebar.config';
import ComposeMail from './ComposeMail';
import { useState } from 'react';
import React from 'react'

const ComposedButton = styled(Button)({
    background:'#c2e7ff',
    color: '#001d35',
    padding: 15,
    borderRadius: 16,
    minWidth: 140,
    textTransform: 'none' 
});

const Container = styled(Box)({
    padding: 8,
    '& > ul': {
        padding: '10px 0 0 5px',
        fontSize: 14,
        fontWeight: 500,
        cursor: 'pointer'
    },
    '& > ul> li> svg': {
        marginRight: 20
    }
});

const SiderBarContent = () => {

    const [openDialog, setOpenDialog] = useState(false);

    const onComposeClick = () => {
        setOpenDialog(true);
    }
    return (
        <Container>
            <ComposedButton onClick={() => onComposeClick()}>
                <CreateOutlined />Compose
            </ComposedButton>
            
            <List>
                {
                    SIDEBAR_DATA.map( data=> (
                        <ListItem>
                           <data.icon fontSize='small'/> {data.title}
                        </ListItem>
                    ))
                }
            </List>
            <ComposeMail openDialog={openDialog} setOpenDialog={setOpenDialog}/>
            
            
        </Container>
    )
}

export default SiderBarContent

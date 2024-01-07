
import { Drawer, styled } from '@mui/material';

const SideBar = () => {
    return (
        <Drawer anchor='left' 
            open={true} 
            hideBackdrop={true} 
            ModalProps={{
                keepMounted: true
            }}
            variant='persistent'
            sx={{
                '& .MuiDrawer-paper': {
                    marginTop: '64px',
                    width: 250,
                    background: '#F5F5F5',
                    borderRight: 'none',
                    height: 'calc(100vh-64px)'
                }
            }}
        >
        
        </Drawer>


    )
};


export default SideBar
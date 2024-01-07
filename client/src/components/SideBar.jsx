import SiderBarContent from './SiderBarContent';
import { Drawer} from '@mui/material';

const SideBar = ({openDrawer}) => {
    return (
        <Drawer anchor='left'
            open={true}
            hideBackdrop={openDrawer}
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
            <SiderBarContent />

        </Drawer>


    )
};


export default SideBar
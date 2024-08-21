import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import  List  from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { APP_NAME, SIDEBAR_LIST, SIDEBAR_WIDTH, APP_ROUTES } from '../config';
import SideBarEntity from './sidebar-item';
import { SideBarItem } from '@/types';

export default function SideBar(){
    return(
            <Drawer
                PaperProps={{
                    sx: {
                    backgroundColor: 'teal', // Replace with your desired color
                    color : '#e7e5e4'
                    },
                }}
                sx={{
                width: SIDEBAR_WIDTH,
                flexShrink: 0, /*prevents sidebar from shrinking when the container is too small*/
                '& .MuiDrawer-paper': {
                    width: SIDEBAR_WIDTH,
                    boxSizing: 'border-box', /* ensures that padding and border are included in the element's total width and height*/
                },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar>
                    <a href = {APP_ROUTES.dashboard}>
                        <Typography variant="h6" component="div" className = "font-bold">
                            {APP_NAME}
                        </Typography>
                    </a>
                </Toolbar>
                <Divider />
                <List>
                    {SIDEBAR_LIST.map((element : SideBarItem, index : number) => (
                        <SideBarEntity sideBarItem={element} index={index} route={element.route}/>
                    ))}
                </List>
            </Drawer>
    )
}

import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"

import { SideBarItem } from "@/types"
import { Divider } from "@mui/material"
import { APP_ROUTES } from "../config"


interface SideBarItemProps{
    sideBarItem : SideBarItem
    index? : number 
    route? : string
}
export default function SideBarEntity(props : SideBarItemProps){
    return(
        <>
            <a href = {props.route}>
                <ListItem disablePadding key = {props.sideBarItem.text}>
                    <ListItemButton>
                        <ListItemIcon>
                            <props.sideBarItem.icon sx={{color: '#e7e5e4'}}/>
                        </ListItemIcon>
                        <ListItemText primary={props.sideBarItem.text}/>
                    </ListItemButton>
                </ListItem>
            </a>
            {props.index == 3 && <Divider/>}
        </>
        
    )
}
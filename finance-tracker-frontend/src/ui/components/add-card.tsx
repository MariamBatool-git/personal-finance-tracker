import { Icons } from "@/ui/icons";
import Typography from "@mui/material/Typography";


interface AddCardProps{
    title : string
}
export default function AddCard(props : AddCardProps){
    return(
        <div className="box-border rounded-lg bg-stone-200 h-28 w-52 mb-12 flex flex-col items-center pt-6">
        <Icons.add fontSize="large"/>
        <Typography variant="body1" className="pt-2">
            {props.title}
        </Typography>
    </div>
    )
}
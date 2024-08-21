import Typography from "@mui/material/Typography"

interface SumCardProps{
    title : string
    sum : number
    month? : string


}
export default function SumCard(props : SumCardProps){
    return(
        <div className="box-border rounded-lg bg-stone-200 h-28 pt-2 pl-3 w-52 mb-12">
            <Typography variant="h4">
                {props.title}
            </Typography>
            <Typography variant="h5" sx={{ opacity: 0.8 }}>
                ${props.sum}
            </Typography>
            {props.month && (  
                <Typography variant="caption" sx={{ opacity: 0.7 }}>
                    {props.month}
                </Typography>
            )}
            
        </div>
    )
}
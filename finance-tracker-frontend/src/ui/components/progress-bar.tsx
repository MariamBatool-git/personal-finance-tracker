
import LinearProgress from "@mui/material/LinearProgress"

interface ProgressBarProps{
    progress : number
}
export default function ProgressBar(props : ProgressBarProps){
    return(
        <div className="w-52 rounded-lg h-52 bg-teal-600">
            <LinearProgress 
                value={props.progress} 
                variant="determinate" 
                sx = {{
                    '& .MuiLinearProgress-bar': {
                        backgroundColor: props.progress <= 70 ? "#66b2b2" : "#CC5500", // Fill color (progress color)
                    },
                    backgroundColor: '#b2d8d8'
                }}
            />
        </div>
    )
}
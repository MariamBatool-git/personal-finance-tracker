import { BREAKDOWN_COLUMNS, BREAKDOWN_ROWS, INCOME_HISTORY_COLUMNS, INCOME_HISTORY_ROWS } from "@/dummy-data";
import AddCard from "@/ui/components/add-card";
import SumCard from "@/ui/components/sum-card";
import { Icons } from "@/ui/icons";
import { Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export default function Income() {
    
    return(
        <div className="flex justify-start pt-24 min-h-screen w-screen pl-12 flex-col">
            <div className="flex justify-start gap-4">
                <SumCard
                    month="December 2024"
                    sum={3000.908}
                    title="Income"
                />
                <AddCard title="Add Income"/>
            </div>
            {/*income breakdown for the month*/}
            <div className="box-border rounded-lg bg-stone-200 pt-2 pl-3 pr-3 mb-12"  style = {{width : 675}}>
                <Typography variant="h4">
                    Breakdown
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.7 }}>
                    December 2024
                </Typography>
                <div className="rounded-lg bg-stone-200 pt-2 w-full" style = {{width : 650}}>
                    <DataGrid
                        rows={BREAKDOWN_ROWS}
                        columns={BREAKDOWN_COLUMNS}
                        sx = {{
                            width : "100%",
                        }}
                        disableRowSelectionOnClick
                        hideFooter /* removes rows per page and page selector*/
                    />
                </div>
            </div>
            {/*income history*/}
            <div className="box-border rounded-lg bg-stone-200 pt-2 pl-3 pr-3" style = {{width : 675}}>
                <Typography variant="h4">
                    Income History
                </Typography>
                <div className="rounded-lg bg-stone-200 pt-2 w-full" style = {{width : 650}}>
                    <DataGrid
                        rows={INCOME_HISTORY_ROWS}
                        columns={INCOME_HISTORY_COLUMNS}
                        sx = {{
                            width : "100%",
                        }}
                        disableRowSelectionOnClick
                        hideFooter /* removes rows per page and page selector*/
                    />
                </div>
            </div>
        </div>
       
    )
}
import { EXPENSE_HISTORY_COLUMNS, EXPENSE_HISTORY_ROWS, EXPENSES } from "@/dummy-data";
import AddCard from "@/ui/components/add-card";
import ExpenseItem from "@/ui/components/expense-item";
import SumCard from "@/ui/components/sum-card";
import { Icons } from "@/ui/icons";
import { groupExpensesByCategory } from "@/ui/utils";
import { List, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export default function Categories() {
    
    return(
        <div className="flex justify-start pt-24 min-h-screen w-screen pl-12 flex-col">
            {/*income card*/}
            <div className="flex justify-start gap-4">
                <SumCard title="Expenses" sum = {2345.90} month="December 2024"/>
                <AddCard title="Add Expense"/>
            </div>
            <div className="box-border rounded-lg bg-stone-200 pt-2 px-3 mb-12"  style = {{width : 675}}>
                {groupExpensesByCategory(EXPENSES).map((e,i) => (<ExpenseItem key={i} item={e}/>))}
            </div>
            <div className="box-border rounded-lg bg-stone-200 pt-2 pl-3 pr-3" style = {{width : 675}}>
                <Typography variant="h4">
                    Expense History
                </Typography>
                <div className="rounded-lg bg-stone-200 pt-2 w-full" style = {{width : 650}}>
                    <DataGrid
                        rows={EXPENSE_HISTORY_ROWS}
                        columns={EXPENSE_HISTORY_COLUMNS}
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
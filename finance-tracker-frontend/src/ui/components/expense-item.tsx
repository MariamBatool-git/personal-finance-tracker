import { Expense, ExpenseCategory } from "@/types";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import ProgressBar from "./progress-bar";
import { expenseIcons } from "../icons";
import ExpenseIconRenderer from "./expense-icon-renderer";
import { calculateProgress, formatExpenseCategory } from "../utils";

interface ExpenseItemProps {
  item : Expense
}

export default function ExpenseItem(props : ExpenseItemProps){
    const progress = calculateProgress(props.item.spent, props.item.budgeted)
    return(
        <div className="flex flex-row justify-between pb-6">
            <div className="flex flex-row gap-4 w-3/6">
                <ExpenseIconRenderer category={props.item.category}/>
                <Typography>
                    {formatExpenseCategory(props.item.category)}
                </Typography>
            </div>
            <div className="w-3/6 flex flex-row justify-between" >
                <Typography>
                    {props.item.spent}
                </Typography>
                <div  className="flex justify-center items-center">
                    <ProgressBar progress={progress}/>
                </div>
                <Typography>
                    {props.item.budgeted}
                </Typography>
            </div>
            
            {/* customize progress bar*/}
           
        </div>
    )
}

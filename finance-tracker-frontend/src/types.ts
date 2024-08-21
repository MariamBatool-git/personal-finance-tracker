import React from "react"
import { GridColDef } from "@mui/x-data-grid"

export type SideBarItem = {
    text : string
    icon : React.ElementType
    route : string
}

export type Expense = {
    category : ExpenseCategory
    spent : number
    budgeted : number
}

export type muiGridColumnDef = GridColDef[]

export type ExpenseCategory =  "housing" |  "transportation" | "food" | "health" | "insurance" | "debt" | "savings_and_investments"|  "entertainment" |  "personal_care" | "children" | "miscellaneous" | "communication" | "taxes" | "emergency" 


export type ExpenseIcons = Record<ExpenseCategory, React.ElementType>;
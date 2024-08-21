import { Expense, muiGridColumnDef } from "./types";
import { Icons } from "./ui/icons";

export const BREAKDOWN_ROWS = [
    { id :1,incomeStream: 'Snow', date: 'Jon', amount: 35 },
    { id : 2,incomeStream: 'Lannister', date: 'Cersei', amount: 42 },
    { id : 3,incomeStream: 'Lannister', date: 'Jaime', amount: 45 },
    { id : 4,incomeStream: 'Stark', date: 'Arya', amount: 16 },
    { id : 5,incomeStream: 'Targaryen', date: 'Daenerys', amount: null },
    { id : 6,incomeStream: 'Melisandre', date: null, amount: 150 },
    { id : 7,incomeStream: 'Clifford', date: 'Ferrara', amount: 44 },
    { id : 8,incomeStream: 'Frances', date: 'Rossini', amount: 36 },
    { id : 9,incomeStream: 'Roxie', date: 'Harvey', amount: 65 },
];

export const BREAKDOWN_COLUMNS : muiGridColumnDef = [
    { field: 'date', headerName: 'Date', width: 225, headerAlign: 'left', align: 'left' },
    { field: 'incomeStream', headerName: 'Income Stream', width: 225, headerAlign: 'left', align: 'left'},
    { field: 'amount', headerName: 'Amount', type: 'number', width: 100, headerAlign: 'left', align: 'left'}
];

export const INCOME_HISTORY_ROWS = [
    { id :1,month: 'Snow', amount: 35 },
    { id :2,month: 'Lannister', amount: 42 },
    { id :3,month: 'Lannister', amount: 45 },
    { id :4,month: 'Stark', amount: 16 },
    { id :5,month: 'Targaryen', amount: null },
    { id :6,month: 'Melisandre', amount: 150 },
    { id :7,month: 'Clifford', amount: 44 },
    { id :8,month: 'Frances', amount: 36 },
    { id :9,month: 'Roxie', amount: 65 },
];

export const INCOME_HISTORY_COLUMNS : muiGridColumnDef = [
    { field: 'month', headerName: 'Month', width: 325, headerAlign: 'left', align: 'left' },
    { field: 'amount', headerName: 'Amount', width: 325, headerAlign: 'left', align: 'left'},
];

export const EXPENSES : Expense[]= [
    {category : "housing", spent : 450, budgeted : 500},
    {category : "health", spent : 300, budgeted : 500},
    {category : "savings_and_investments", spent : 300, budgeted : 500},
    {category : "savings_and_investments", spent : 300, budgeted : 500, },
    {category : "children", spent : 1200, budgeted : 1300},
    {category : "savings_and_investments", spent : 300, budgeted : 500},
    {category : "health", spent : 300, budgeted : 500},
]

export const EXPENSE_HISTORY_ROWS = [
    { id : 1, month: 'Snow', spent: 35, budgeted : 100 },
    { id :2,month: 'Lannister', spent: 42, budgeted : 100 },
    { id :3,month: 'Lannister', spent: 45, budgeted : 100 },
    { id :4,month: 'Stark', spent: 16, budgeted : 100 },
    { id :5,month: 'Targaryen', spent: null, budgeted : 100 },
    { id :6,month: 'Melisandre', spent: 150, budgeted : 100 },
    { id :7,month: 'Clifford', spent: 44, budgeted : 100 },
    { id :8,month: 'Frances', spent: 36, budgeted : 100 },
    { id :9,month: 'Roxie', spent: 65, budgeted : 100 },
];

export const EXPENSE_HISTORY_COLUMNS : muiGridColumnDef = [
    { field: 'month', headerName: 'Month', width: 218, headerAlign: 'left', align: 'left' },
    { field: 'spent', headerName: 'Spent', width: 216, headerAlign: 'left', align: 'left'},
    { field: 'budgeted', headerName: 'Budgeted', width: 216, headerAlign: 'left', align: 'left'},
];


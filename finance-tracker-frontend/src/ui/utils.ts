import { Expense, ExpenseCategory } from "@/types";

export function formatExpenseCategory(category : ExpenseCategory){
    return category
        .split('_') // Split the string into an array of words
        .map((word : string) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter of each word
        .join(' '); // Join the array of words back into a single string
}

export function groupExpensesByCategory(expenses: Expense[]): Expense[] {
    const grouped = expenses.reduce((acc, expense) => {
        if (!acc[expense.category]) {
            acc[expense.category] = { ...expense };
        } else {
            acc[expense.category].spent += expense.spent;
            acc[expense.category].budgeted += expense.budgeted;
        }
        return acc;
    }, {} as Record<string, Expense>);

    return Object.values(grouped);
}

export function calculateProgress(spent : number, budgeted : number){
    return (spent/budgeted)*100
}
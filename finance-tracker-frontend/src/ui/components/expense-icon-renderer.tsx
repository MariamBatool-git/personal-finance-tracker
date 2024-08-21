import { ExpenseCategory } from "@/types";
import { expenseIcons } from "../icons";


interface ExpenseIconRendererProps {
    category: ExpenseCategory;
}

export default function ExpenseIconRenderer(props : ExpenseIconRendererProps){
    const IconComponent = expenseIcons[props.category];

    if (!IconComponent) {
        return <div>Icon not found</div>;
    }

    return <IconComponent />;
}
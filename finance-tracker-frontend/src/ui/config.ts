import { Icons } from "@/ui/icons"

export const APP_ROUTES = {
    income : '/income',
    dashboard : '/',
    categories : '/categories',
    goals : '/goals',
    analytics : '/analytics',
    settings : '/settings',
    profile : '/profile'
}

export const SIDEBAR_WIDTH = 240;

export const SIDEBAR_LIST = [
        {
            text : "Categories",
            icon : Icons.category,
            route : APP_ROUTES.categories  
        },
        {
            text : "Income",
            icon : Icons.income,
            route : APP_ROUTES.income
        },
        {
            text : "Goals",
            icon : Icons.goals,
            route : APP_ROUTES.goals
        },
        {
            text : "Analytics",
            icon : Icons.analytics,
            route : APP_ROUTES.analytics
        },
        // divider here in side bar
        {
            text : "Settings",
            icon : Icons.settings,
            route : APP_ROUTES.settings
        },
        {
            text : "Profile",
            icon : Icons.profile,
            route : APP_ROUTES.profile
        },
        {
            text : "Log Out",
            icon : Icons.logOut,
            route : ""
        },
]

export const APP_NAME =  "Finance Tracker"

export const EXPENSE_CATEGORIES_LIST = [
    "housing", "transportation", "food", "health", "insurance", "debt", "savings_and_investments", "entertainment", "personal_care", "children", "miscellaneous", "communication", "taxes", "emergency" 
]
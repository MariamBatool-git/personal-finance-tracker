import Person from "@mui/icons-material/Person";
import CategoryIcon from '@mui/icons-material/Category';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import CommuteIcon from '@mui/icons-material/Commute';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PaymentsIcon from '@mui/icons-material/Payments';
import SavingsIcon from '@mui/icons-material/Savings';
import AttractionsIcon from '@mui/icons-material/Attractions';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import MarginIcon from '@mui/icons-material/Margin';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { ExpenseIcons } from "@/types";


export const expenseIcons : ExpenseIcons = {
    //categories icons
    "housing" : HomeIcon,
    "transportation" : CommuteIcon,
    "food" : RestaurantIcon,
    "health" : HealthAndSafetyIcon,
    "insurance" : EventNoteIcon,
    "debt" : PaymentsIcon,
    "savings_and_investments" : SavingsIcon,
    "entertainment" : AttractionsIcon,
    "personal_care" : SelfImprovementIcon,
    "children"  : EscalatorWarningIcon,
    "miscellaneous" : MiscellaneousServicesIcon,
    "communication" : PermPhoneMsgIcon,
    "taxes" : MarginIcon,
    "emergency" : MedicalServicesIcon
}
export const Icons = {
    //sidebar icons
    profile : Person,
    category : CategoryIcon,
    income : AttachMoneyIcon,
    goals : SportsScoreIcon,
    analytics : AnalyticsIcon,
    settings : SettingsIcon,
    logOut : LogoutIcon,
    //general icons
    add : AddIcon
    


}

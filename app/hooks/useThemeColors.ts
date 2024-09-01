import { useColorScheme } from "react-native";
import { colors } from "../constants/colors";

export function useThemeColors(){
    const theme = useColorScheme() ?? "light"
    return colors[theme]
}
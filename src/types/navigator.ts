import { NavigationProp } from "@react-navigation/native";

export type RootStackParamList = {
    Main: undefined
    Home: undefined
    Game: undefined
    Play: undefined
    Biometric: undefined
}

export type StackNavigation = NavigationProp<RootStackParamList>;
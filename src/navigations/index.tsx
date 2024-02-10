import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import Main from '../pages/main';
import Home from '../pages/home';
import Game from '../pages/game';
import Play from '../pages/play';
import Biometric from '../pages/biometric';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
    const { Navigator, Screen } = RootStack

    return (
        <NavigationContainer>
            <Navigator
                initialRouteName='Main'
            >
                <Screen name='Main' options={{ headerShown: false }} component={Main} />
                <Screen name='Home' options={{ headerShown: false }} component={Home} />
                <Screen name='Game' options={{ headerShown: false }} component={Game} />
                <Screen name='Play' options={{ headerShown: false }} component={Play} />
                <Screen name='Biometric' options={{ headerShown: false }} component={Biometric} />
            </Navigator>
        </NavigationContainer>
    )

}
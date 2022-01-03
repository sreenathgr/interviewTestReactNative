import React from 'react'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenName } from '../screenNames';
import StartScreen from '../Screens/StartScreen';
import AveragePlayScreen from '../Screens/AveragePlayScreen';
import GamePlayedScreen from '../Screens/GamesPlayedScreen';
import ScreenShotAchievementScreen from '../Screens/ScreenShotAchievementScreen';
const MainStack = createNativeStackNavigator()

 export const RootNavigator = () => {
     return (
        <NavigationContainer>
        <MainStack.Navigator initialRouteName={ScreenName.Start}>
                 <MainStack.Screen name={ScreenName.Start} component={StartScreen} options={{headerShown:false}}/>
            <MainStack.Screen name={ScreenName.AveragePlay} component={AveragePlayScreen} options={{headerShown:false}}/>
            <MainStack.Screen name={ScreenName.GamesPlayed} component={GamePlayedScreen}  options={{headerShown:false}}/>
            <MainStack.Screen name={ScreenName.ScreenShotOfAchievement} component={ScreenShotAchievementScreen} options={{headerShown:false}} />
            
             </MainStack.Navigator>
             </NavigationContainer>
    )
}

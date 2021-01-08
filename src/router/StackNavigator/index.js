import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Spalsh from '../../pages/Splash';
import Home from '../../pages/Home';
import Profile from '../../pages/Profile';

const Stack = createStackNavigator();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Spalsh} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

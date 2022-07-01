// import * as React from 'react';
// import { View, Text } from 'react-native';
import React ,{useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Login from '../Login/Login';
//import Drwer from '../Drawer/Drawer';
// import MainTab from '../StackNavigator/MainTab';

// import Login from '../Screens/Login/Login'

// import Profile from "../screen/Profile/Profile"
// import Setting from "../screen/Setting/Setting"
// import Home from "../screen/Home/Home"
// import MainTab from "../Navigation/TabNavigator"

import MainTab from './MainTab';
import WelcomePage from '../Screens/WelcomePage/WelcomePage';
import Login from '../Screens/Login/Login';
//import Onboarding from 'react-native-onboarding-swiper';
import OnBoarding from '../Screens/OnBoarding/OnBoarding';
import SignUp from '../Screens/SignUp/SignUp';
import Setting from '../Screens/Setting/Setting';
import Settings from '../Screens/Setting/Settings';
import Drwer from '../Screens/Drawer/Drwer';
// import { useState, useEffect } from 'react/cjs/react.production.min';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator();

function Routes() {
  const [Token, setToken] = useState('');
  useEffect(async () => {
    const value = await AsyncStorage.getItem('Token');
    setToken(value);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}
      >
        
        {Token ? (
          <>
            <Stack.Screen name="MainTab" component={MainTab} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        ) : (
          <>
            <Stack.Screen name="WelcomePage" component={WelcomePage} />
            <Stack.Screen name="OnBoarding" component={OnBoarding} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />

            <Stack.Screen name="Home" component={MainTab} />
            <Stack.Screen name="Setting" component={Setting} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="MainTab" component={MainTab} />

            {/* <Stack.Screen name="Home" component={MainTab}/> */}
            <Stack.Screen name="Drwer" component={Drwer} />

          </>
        )}



      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
 
import * as React from 'react';
import { StyleSheet, Text, View,SafeAreaView,Button } from 'react-native'
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { DrawerItemList } from '@react-navigation/drawer';
import { DrawerItem } from '@react-navigation/drawer';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import Home from '../Home/Home';
import Routes from '../../StackNavigator/Stack';
import Setting from '../Setting/Setting';
import Settings from '../Setting/Settings';
//import { TouchableOpacity } from 'react-native-gesture-handler';


function LogOut({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.navigate('Login')} title="LogOut" />
    </View>
  );
}
const Drawer = createDrawerNavigator();

const Drwer = (props) => {
  return (
    <Drawer.Navigator  initialRouteName="Home" drawerContent={props => {
      return (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem label="Profile" onPress={() => props.navigation.navigate('Setting')} />
          <DrawerItem label="Setting" onPress={() => props.navigation.navigate("Settings")} />
        </DrawerContentScrollView>
      )
    }}
     useLegacyImplementation
    screenOptions={{
      headerShown: false}}>
        <Drawer.Screen name="Home" component={Home} />
      
    {/* <Drawer.Screen name="LogOut" component={LogOut}/>
    <Drawer.Screen name="SignUp" component={Routes} /> */}
  </Drawer.Navigator>
  
  )
}

export default Drwer


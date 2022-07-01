import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const {height, width} = Dimensions.get('window');

// import Home from '../screen/Home/Home';
// import Profile from '../screen/Profile/Profile';
// import Setting from "../screen/Setting/Setting"
import Login from "../Screens/Login/Login"
import SingUp from '../Screens/SignUp/SignUp';
import Drwer from '../Screens/Drawer/Drwer'
import Setting from '../Screens/Setting/Setting';
import Settings from '../Screens/Setting/Settings';
import Home from '../Screens/Home/Home';
// import Forget from '../Forget/Forget';
// import {NavigationContainer} from '@react-navigation/native';
//import CreateP from '../CreateP/CreateP';
// import Drawer from './Drawer';
//import Drwer from '../Drawer/Drawer';

const Tab = createBottomTabNavigator();
const MainTab = (props) => {
  return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          position: 'absolute',
          tabBarStyle: {
            position: 'absolute',
            height: height / 10,
            backgroundColor: '#FFFFFF',
            width: width,
            alignItems: 'center',
            borderTopLeftRadius: height / 30,
            borderTopRightRadius: height / 30,
            borderColor: 'red',
            borderTopWidth: 0,
            bottom: -height * 0.0,
          },
        }}>
        <Tab.Screen
          name="Drwer"
          component={Drwer} // Drawer function call here
          options={{
            // tabBarLabel: "Fantasy cricket",
            tabBarIcon: ({focused, color, size}) =>
              focused ? (
                <View style={styles.TabImageContainer}>
                  <Image
                    source={require('../Assets/Images/Home.png')}
                    resizeMode="contain"
                    style={styles.img}
                  />
                  <Text
                    style={{
                      fontSize: height / 75,
                      color: 'rgba(251, 109, 58, 1)',
                    }}>
                    Home
                  </Text>
                </View>
              ) : (
                <View style={styles.TabImageContainer}>
                  <Image
                    source={require('../Assets/Images/Home.png')}
                    resizeMode="contain"
                    style={styles.image}
                  />
                  <Text style={{fontSize: height / 75, color: 'Black'}}>
                    Home
                  </Text>
                </View>
              ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={Setting}
          options={{
            tabBarIcon: ({focused, color, size}) =>
              focused ? (
                <View style={styles.TabImageContainer}>
                  <Image
                    source={require('../Assets/Images/Profile4.png')}
                    resizeMode="contain"
                    style={styles.image}
                  />
                  <Text
                    style={{
                      fontSize: height / 75,
                      color: 'rgba(251, 109, 58, 1)',
                    }}>
                    Profile
                  </Text>
                </View>
              ) : (
                <View style={styles.TabImageContainer}>
                  <Image
                    source={require('../Assets/Images/Profile3.png')}
                    resizeMode="contain"
                    style={styles.image}
                  />
                  <Text style={{fontSize: height / 75, color: 'black'}}>
                    Profile
                  </Text>
                </View>
              ),
          }}
        />

        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({focused, color, size}) =>
              focused ? (
                <View style={styles.TabImageContainer}>
                  <Image
                    source={require('../../src/Assets/Images/setting-20.png')}
                    resizeMode="contain"
                    style={styles.img}
                  />
                  <Text
                    style={{
                      fontSize: height / 75,
                      color: 'rgba(251, 109, 58, 1)',
                    }}>
                    Setting
                  </Text>
                </View>
              ) : (
                <View style={styles.TabImageContainer}>
                  <Image
                    source={require('../../src/Assets/Images/setting.png')}
                    resizeMode="contain"
                    style={styles.image}
                  />
                  <Text style={{fontSize: height / 75, color: 'black'}}>
                    Setting
                  </Text>
                </View>
              ),
          }}
        />

        {/* <Tab.Screen
          name="CreateP"
          component={CreateP}
          options={{
            tabBarIcon: ({focused, color, size}) =>
              focused ? (
                <View style={styles.TabImageContainer}>
                  <Image
                    source={require('../../Images/Home.png')}
                    resizeMode="contain"
                    style={styles.img}
                  />
                  <Text
                    style={{
                      fontSize: height / 75,
                      color: 'rgba(251, 109, 58, 1)',
                    }}>
                    Login
                  </Text>
                </View>
              ) : (
                <View style={styles.TabImageContainer}>
                  <Image
                    source={require('../../Images/Home.png')}
                    resizeMode="contain"
                    style={styles.image}
                  />
                  <Text style={{fontSize: height / 75, color: 'black'}}>
                    Login
                  </Text>
                </View>
              ),
          }}
        /> */}

       
      </Tab.Navigator>
  );
};

export default MainTab;

const styles = StyleSheet.create({
  img: {
    height: height * 0.06,
    width: width * 0.06,
  },
  image: {
    height: height * 0.06,
    width: width * 0.06,
  },
  TabImageContainer: {
    height: height * 0.08,
    width: width * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor:'red'
  },
});
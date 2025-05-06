import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Akun, ItemPromo, DetailPromo, AddPromoForm} from '../screens';
import {Home2,Bag2,People,ProfileCircle,} from 'iconsax-react-native';
import {fontType, colors} from '../theme';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainApp() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: colors.lightGreen(),
        tabBarInactiveTintColor: colors.white(),
        tabBarStyle: {
          paddingBottom: 10,
          paddingTop: 10,
          height: 60,
          backgroundColor: colors.warmYellow(),
        },
        tabBarLabelStyle: {
          marginTop: 5,
          fontSize: 10,
          fontFamily: fontType['Pjs-Medium'],
        },
      }}>

      {/* Home */}
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color}) => (
            <Home2
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />

      {/* Produk */}
      <Tab.Screen
        name="Jasa"
        component={() => null} // sementara null/dummy
        options={{
          tabBarLabel: 'Jasa',
          tabBarIcon: ({focused, color}) => (
            <Bag2
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />

      {/* Komunitas */}
      <Tab.Screen
        name="Promo"
        component={ItemPromo}
        options={{
          tabBarLabel: 'Promo',
          tabBarIcon: ({focused, color}) => (
            <People
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />

      {/* Profile */}
      <Tab.Screen
        name="Akun"
        component={Akun}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, color}) => (
            <ProfileCircle
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

const Router = () => {
  return (
    <Stack.Navigator>
      {/* Bottom Tab */}
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />

      {/* Detail Komunitas */}
      <Stack.Screen
        name="DetailPromo"
        component={DetailPromo}
        options={{
          headerShown: false,
          animationEnabled: true,
          animationTypeForReplace: 'pop',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />

      {/* Add Komunitas Form */}
      <Stack.Screen
        name="AddPromoForm"
        component={AddPromoForm}
        options={{
          headerShown: false,
          animationEnabled: true,
          animationTypeForReplace: 'pop',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
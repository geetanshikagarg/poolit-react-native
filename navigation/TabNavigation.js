import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Discover from '../screens/Discover';
import Myoffers from '../screens/Myoffers';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen name='discover' component={Discover}/>
    <Tab.Screen name='myoffer' component={Myoffers}/>


    </Tab.Navigator>
  );
}

export default TabNavigation;

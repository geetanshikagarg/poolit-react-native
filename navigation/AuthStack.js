import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/Signup/RegisterScreen';
import OnboardingScreen from '../screens/Onboarding/Onboarding';
import Category from '../screens/Category/Category';
import Classified from '../screens/Classified/Classified';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signin" component={RegisterScreen} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Classified" component={Classified} 
       options={{
       headerTitleStyle:{
         color:'dark green'
       }
       }}/>


    </Stack.Navigator>
  );
};

export default AuthStack;

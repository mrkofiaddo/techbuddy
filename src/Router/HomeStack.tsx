import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ServiceScreen from '../screens/ServiceScreen';
import {Text, SafeAreaView, View, TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();



const HomeStack = () => {
 
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{title: 'Home'}}/>
        
     
      <Stack.Screen component={ServiceScreen} name="ServiceScreen" />
    </Stack.Navigator>
  );
};

export default HomeStack;
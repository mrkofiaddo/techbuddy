import React from 'react'
import { createBottomTabNavigator,} from '@react-navigation/bottom-tabs'
import Entypo from 'react-native-vector-icons/Entypo'
import HomeStack from './HomeStack'
import AddressScreen from '../screens/AddressScreen'


const Tab=createBottomTabNavigator();


const bottomTabNav = () => {
    return (
     
            <Tab.Navigator screenOptions={{
                tabBarShowLabel:false,}}>

           { <Tab.Screen
            component={HomeStack}
            name="HomeStack"
            options={{
            headerShown:false,
            tabBarIcon: ({color}) => (
            <Entypo name="home" color={color} size={25} />
              ),
            }}
        />}
                
                
                <Tab.Screen
                component={AddressScreen}
                name="Address"
                options={{
                tabBarIcon: ({color}) => (
                    <Entypo name="address" color={color} size={25} />
                    ),
                    }}
                />
               {/*} <Tab.Screen
                component={AddressScreen}
                name="AddressScreen"
                options={{
                tabBarIcon: ({color}) => (
                    <Entypo name="user" color={color} size={25} />
                    ),
                    }}
                />
               
                {/*<Tab.Screen
            component={}
            name="more"
            options={{
            tabBarIcon: ({color}) => (
            <Entypo name="menu" color={color} size={25} /> ),
            }}
            />*/}
            </Tab.Navigator>
            
        
    )
}

export default bottomTabNav

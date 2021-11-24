import React from 'react'
import { NavigationContainer  } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import bottomTabNav from './buttonTab'

const Root=createStackNavigator();


const Router = ({searchValue}:{searchValue: string}) => {
    return (
        <NavigationContainer>
            <Root.Navigator screenOptions={{headerShown:false}}>
                <Root.Screen component={bottomTabNav} name='HomeTabs'/>
            </Root.Navigator>
            
        </NavigationContainer>
    )
}

export default Router

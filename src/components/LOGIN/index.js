
import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import LoginTab1 from './LoginTab1';
import LoginTab2 from './LoginTab2';



export default TabNavigator({
    LoginTab1: { screen: LoginTab1 },
    LoginTab2: { screen: LoginTab2 },
},{
    tabBarPosition:'top'
});
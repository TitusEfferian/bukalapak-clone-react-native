import React from 'react';
import { StackNavigator } from "react-navigation";
import MainContent from './MainContent';

const RootStack = StackNavigator({
    Home:{
        screen:MainContent
    }
})


export default class Root extends React.Component{
    render(){
        return <RootStack/>
    }
}
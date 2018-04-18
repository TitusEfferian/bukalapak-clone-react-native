import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import SideBar from "../sidebar/SideBar.js";
import { DrawerNavigator } from "react-navigation";
import {Dimensions} from 'react-native';
import Login from "../LOGIN/index.js";
import Pulsa from "../Pulsa/index.js";
const HomeScreenRouter = DrawerNavigator(
    {
        Home: { screen: HomeScreen },
        Pulsa:{screen:Pulsa},
        Login:{screen:Login}
    },
    {   
        
        contentComponent: props => <SideBar {...props} />,
        
    }
);
export default HomeScreenRouter;

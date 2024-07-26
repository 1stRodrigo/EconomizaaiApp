import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../pages/Home";
import Perfil from "../pages/Perfil";
import New from "../pages/New";

import CustomTabBar from "../customTabBar";


const Tab = createBottomTabNavigator();

function AppRoutes(){
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#0D0D0D",

                tabBarStyle:{
                    borderTopWidth: 0,
                    backgroundColor: "#FFF"
                }
            }}

            tabBar={ (props) => <CustomTabBar {...props} /> }
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: "home"
                }}
            />

            <Tab.Screen
                name="New"
                component={New}
                options={{
                    tabBarIcon: "plus",

                }}
            />

            <Tab.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    tabBarIcon: "torso"
                }}
            />

        </Tab.Navigator>
    )
}

export default AppRoutes;

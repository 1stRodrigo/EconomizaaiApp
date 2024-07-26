import 'react-native-gesture-handler';
import React from "react";
import { StatusBar } from "react-native";

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes/index';
import AuthProvider from './src/contexts/auth';
import HomeProvider from './src/contexts/home';
import AvatarProvider from './src/contexts/avatar';

export default function App(){
  return(
    <NavigationContainer>
      <AuthProvider>
        <HomeProvider>
          <AvatarProvider>
            <StatusBar backgroundColor="#F27405" barStyle="dark-content" />
            <Routes/>
          </AvatarProvider>
        </HomeProvider>
      </AuthProvider>
    </NavigationContainer>
  )
}
import React from 'react';
import Navigator from './navigation';
import RegisterProvider from './register/core/RegisterProvider';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import Home from './pages/Home';

export function App() {
  return (
      <SafeAreaProvider>
        <SafeAreaView style={{
          flex: 1,
          backgroundColor: 'white'
        }}>
          <RegisterProvider>
            <StatusBar
              barStyle="dark-content"    
              backgroundColor="white"  
            />
            <Navigator
              pages={[{
                name: 'Home',
                type: 'page',
                component: Home,
                properties: {}
              }]}
              initialRouteName={'Home'}
            />
          </RegisterProvider>
        </SafeAreaView>
      </SafeAreaProvider>
  );
}
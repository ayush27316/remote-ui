import React, { useEffect, useState } from 'react';
import Navigator from './navigation';
import RegisterProvider from './register/core/RegisterProvider';
import useRegister from "./register/hooks/useRegister";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
require('./assets/images/main-banner.jpg');
require('./assets/images/christmas2.jpg');
import LandingPage from './pages/LandingPage';

const pages = {
  LandingPage
};


async function init(register) {
  Object.entries(pages).forEach(([name, Component]) => {
    register.registerComponent({
      name,
      type: 'page',
      component: Component,
      properties: {}
    });
  });
}

function AppInner() {
  const register = useRegister();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    (async () => {
      await init(register);
      setInitialized(true);
    })();
  }, [register]);

  if (!initialized) {
    return <></>;
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"    
        backgroundColor="white"  
      />
      <Navigator
        pages={register.getComponentsByType('page')}
        initialRouteName={'LandingPage'}
      />
    </>
  );
}

export function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{
        flex: 1,
        backgroundColor: 'white'
      }}>
        <RegisterProvider>
          <AppInner />
        </RegisterProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
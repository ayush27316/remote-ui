import React, { useEffect, useState } from 'react';
import Navigator from './navigation';
import RegisterProvider from './register/core/RegisterProvider';
import useRegister from "./register/hooks/useRegister";
import Renderer from "./register/core/Renderer";
import { MainBannerv2 as bannerSchema } from './schemas/MainBanner'
import {Banner} from './schemas/Banner'
import { schema as headerShcema } from './schemas/Header';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
require('./assets/images/main-banner.jpg');
require('./assets/images/christmas2.jpg');
import Home from './pages/Home';

const pages = {
  Home
};


/**
 * test fetch
 */
// async function fetch() {
//   return Promise.resolve([
//     {
//       name: 'MainBanner',
//       schema: bannerSchema,
//       type: 'component', //'component' 
//       properties: {
//         // options: ['main-page', 'hide-bar']
//     }
//     },
//     {
//       name: 'ChristmasBanner',
//       schema: Banner,
//       type: 'component', //'component' 
//       properties: {
//         // options: ['main-page', 'hide-bar']
//     }
//     }
//   ]);
// }

async function fetch() {
  return Promise.resolve([
    {
      name: 'Header',
      schema: headerShcema,
      type: 'component', 
      properties: {}
    },
    {
      name: 'MainBanner',
      schema: bannerSchema,
      type: 'component', //'component' 
      properties: {// options: ['main-page', 'hide-bar']
        }
    }
  ]);
}

/**
 * check with server if app should register any components. If so,
 * initiate registration and pre-render components from schemas and 
 * asynchronously save schemas to local storage. If component already 
 * exists then it is replaced.
 */
async function loadRemoteComponents(register) {
  const data = await fetch();

  //some components might depend on other
  //work around for this is to send components
  //in an order that won't cause any dependencies issues
  //[To Do]: allow components to pass in list of components
  //they depend on and register accordingly
  //if a component/page with same name exists then it is replaced
  data.forEach(({ name, schema, type, properties }) => {
    register.registerRemoteComponent({
      name,
      schema,
      type,
      properties
    });
  });
  //  await preRenderRemoteComponents();
  //  registerComponent();
  //  saveSchemasToDisk();
}

async function init(register) {
  //we register both native and remote pages/components with the registry 
  //so that we can build routes dynamically.
  Object.entries(pages).forEach(([name, Component]) => {
    register.registerComponent({
      name,
      type: 'page',
      component: Component,
      properties: {}
    });
  });
  await loadRemoteComponents(register);
}

/**
 * Load all registered pages with AppRegistry.
 */
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
        initialRouteName={'Home'}
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
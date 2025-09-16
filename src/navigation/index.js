import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

/**
 * Dynamically create navigator for screens. 
 */
export default function Navigator({pages, initialRouteName}) {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName={initialRouteName}
        screenOptions={{
          headerShown: false
        }}
        >
        {pages && pages.map((page) => {
        if (!page.component) {
          console.warn(`Page "${page.name}" has no valid component`);
        }
        return ( <Stack.Screen 
            key={page.name} 
            name={page.name}
            component={page.component}
            options={page.options?? {}}
          />);
})}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React from 'react';

export const Routes = () => {
    return (
      <AppStack.Navigator
        screenOptions={{headerTransparent: true, headerShown: false}}
      >
        <AppStack.Screen name="Welcome" component={Welcome} />
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Home" component={Home} />
      </AppStack.Navigator>
    );
  }
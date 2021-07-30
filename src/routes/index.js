import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import Home from '../pages/Home';
import MyLinks from '../pages/MyLinks';

const Route = createDrawerNavigator();

const Routes = () => {
  return (
    <Route.Navigator
      drawerContentOptions={{
        activeBackgroundColor: '#2CCBB9',
        activeTintColor: '#fff',
        marginTop: 13,
        labelStyle: {
          fontSize: 20,
        },
      }}
    >
      <Route.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Encurtar Link',
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons
              name={focused ? 'cube' : 'cube-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Route.Screen
        name="MyLinks"
        component={MyLinks}
        options={{
          title: 'Meus Links',
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons
              name={focused ? 'stats-chart' : 'stats-chart-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Route.Navigator>
  );
};

//cube-outline
export default Routes;

//<Routes.Navigator initialRouteName="Home"> qual pages vai iniciar o app

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome, faCalendarDay} from '@fortawesome/free-solid-svg-icons';
import HomePage from './src/pages/HomePage';
import CalendarPage from './src/pages/CalendarPage';
const Tab = createBottomTabNavigator();

const TabBarCalendarIcon = ({color}: {color: string}) => (
  <FontAwesomeIcon icon={faCalendarDay} size={20} color={color} />
);

const TabBarHomeIcon = ({color}: {color: string}) => (
  <FontAwesomeIcon icon={faHome} size={20} color={color} />
);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarActiveTintColor: '#0057b8',
            headerShown: false,
            tabBarStyle: {backgroundColor: '#FFD600'},
          }}>
          <Tab.Screen
            name="Home"
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: TabBarHomeIcon,
            }}
            component={HomePage}
          />
          <Tab.Screen
            name="Calendar"
            options={{
              tabBarLabel: 'Calendar',
              tabBarIcon: TabBarCalendarIcon,
            }}
            component={CalendarPage}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

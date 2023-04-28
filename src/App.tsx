import React from 'react';
import {Keyboard, StyleSheet, Button, View} from 'react-native';
import MainPage from './views/mainPage';
import LoginPage from './views/loginPage';
import ChatPage from './views/chatPage';
import SearchPage from './views/searchPage';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function Navigator() {
  // const Tab = createMaterialBottomTabNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'Main') {
            iconName = 'home';
            color = focused ? '#0FA915' : 'grey';
          } else if (route.name === 'Search') {
            iconName = 'search';
            color = focused ? '#0FA915' : 'grey';
          } else if (route.name === 'Chat') {
            iconName = 'rocketchat';
            color = focused ? '#0FA915' : 'grey';
          } else if (route.name === 'LoginPage') {
            iconName = 'user';
            color = focused ? '#0FA915' : 'grey';
          }
          return <FontAwesome5 name={iconName} size={20} color={color} />;
        },
        header: () => null,
      })}>
      <Tab.Screen name="Main" component={MainPage} options={{tabBarBadge: 3}} />
      <Tab.Screen name="Search" component={SearchPage} />
      <Tab.Screen name="Chat" component={ChatPage} />
      <Tab.Screen name="LoginPage" component={LoginPage} />
    </Tab.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    width: '100%',
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: '10%',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

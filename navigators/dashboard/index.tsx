/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {HomeScreenParam, TabScreenParam} from './screens';
import {NavigationProp, RouteProp} from '@react-navigation/core';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/dashboard/dashboard';
import {Orders} from '../../screens/dashboard/Orders';
import {Settings} from '../../screens/dashboard/Settings';
import {useTheme} from '@emotion/react';
import HomeIcon from '../../assets/svgs/Home.svg';
import HomeActive from '../../assets/svgs/homeActive.svg';
import Document from '../../assets/svgs/Document.svg';
import DocumentAvtive from '../../assets/svgs/documentActive.svg';
import SettingsIcon from '../../assets/svgs/Setting.svg';
import SettingsActive from '../../assets/svgs/settingsActive.svg';

const {Screen, Navigator} = createBottomTabNavigator<TabScreenParam>();
const {Screen: StackScreen, Navigator: StackNav} =
  createStackNavigator<HomeScreenParam>();

type ScreenOptions = {
  route: RouteProp<TabScreenParam>;
  navigation: NavigationProp<TabScreenParam>;
};

const HomeNavigator: React.FC = () => {
  const {colors} = useTheme();

  const screenOptions = ({
    route,
  }: ScreenOptions): BottomTabNavigationOptions => {
    return {
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.border,
      headerShown: false,
      tabBarIcon: ({focused}: {focused: boolean}) => {
        switch (route.name) {
          case 'Home':
            return focused ? <HomeActive /> : <HomeIcon />;

          case 'Order':
            return focused ? <DocumentAvtive /> : <Document />;
          case 'Settings':
            return focused ? <SettingsActive /> : <SettingsIcon />;
        }
      },
    };
  };

  return (
    <Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Order" component={Orders} />
      <Screen name="Settings" component={Settings} />
    </Navigator>
  );
};

const Home: React.FC = () => {
  const {colors} = useTheme();
  return (
    <StackNav
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Tab">
      <StackScreen
        component={HomeNavigator}
        name="Tab"
        options={{
          title: 'Home',
        }}
      />
    </StackNav>
  );
};

export default Home;

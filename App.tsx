import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {Provider} from 'react-redux';
import {RootSiblingParent} from 'react-native-root-siblings';
import {store} from './store';
import RootNavigator from './navigators';
import {ThemeProvider} from '@emotion/react';
import {LogBox} from 'react-native';

LogBox.ignoreLogs(['VirtualizedLists']);
LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const App: React.FC = () => {
  const scheme = useColorScheme();

  const selectedTheme = scheme === 'dark' ? DarkTheme : DefaultTheme;

  const theme = {
    ...selectedTheme,
    dark: false,
    colors: {
      primary: '#DE183D',
      green: '#048848',
      background: '#FFF',
      border: '#C9C9C9',
      white: '#ffffff',
    },
  };

  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          {/* <SafeAreaProvider style={{flex: 1}}> */}
          <RootSiblingParent>
            <RootNavigator />
          </RootSiblingParent>
          {/* </SafeAreaProvider> */}
        </ThemeProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

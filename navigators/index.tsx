/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './auth';
import {RootScreenList} from './RootStackSceenList';
import Dashboard from './dashboard';
import {useAuth} from '../store/auth/hook';
import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-async-storage/async-storage';
import {Auth, setCredential, setDidOnboard} from '../store/auth';
import {useDispatch} from 'react-redux';
import Onboarding from '../screens/onboarding';

const {Screen, Navigator} = createNativeStackNavigator<RootScreenList>();

const RootNavigator: React.FC = () => {
  const [visited, setVisited] = useState(false);
  const {user, didOnboard} = useAuth();
  const {getItem} = useAsyncStorage('@user');
  const {getItem: getOnboard} = useAsyncStorage('onboard');

  console.log(user, 'the user');

  const [user_data, setUserData] = useState<Auth>({
    user: null,
    access_token: null,
  });
  const dispatch = useDispatch();

  const retrieveStoredToken = async () => {
    const json = await getItem();

    const user_da: Auth = json != null ? JSON.parse(json) : {};

    dispatch(setCredential(user_data));

    setUserData(user_da);
    console.log(user_data, 'user data');

    // console.log(JSON.parse(visit as string), 'visited');
  };

  const getOnboardStatus = async () => {
    const onboardStatus = await getOnboard();
    const status = onboardStatus !== null ? JSON.parse(onboardStatus) : false;

    if (status) {
      dispatch(setDidOnboard(status));
    }

    console.log(status, 'main onboars status');
  };

  useEffect(() => {
    getOnboardStatus();
    // retrieveStoredToken();
  }, [didOnboard]);

  return (
    <Navigator>
      {/* when checking if user has signed in  render splash screen*/}
      {/* {isLoading && (
        <Screen
          name="Splash"
          component={SplashScreen}
          options={{
            headerShown: false
          }}
        />
      )} */}
      {!didOnboard && (
        <Screen
          name="onboarding"
          component={Onboarding}
          options={{
            headerShown: false,
            animationTypeForReplace: 'push',
          }}
        />
      )}

      {!user && (
        <Screen
          name="AuthNavigator"
          component={AuthNavigator}
          options={{
            headerShown: false,
            animationTypeForReplace: !user ? 'pop' : 'push',
          }}
        />
      )}

      {user && (
        <Screen
          name="DashboardNavigator"
          component={Dashboard}
          options={{
            headerShown: false,
          }}
        />
      )}
    </Navigator>
  );
};

export default RootNavigator;

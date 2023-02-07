/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthScreenList} from './authParamList';
import SignUp from '../../screens/auth/signUp';
import SetPassword from '../../screens/auth/signUp/passwordSetup';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {BaseViewContainer, Spacer} from '../../components/view';
import {StatusBar} from 'react-native';
import VerifyOTP from '../../screens/auth/signUp/VerifyOTP';

const {Screen, Navigator} = createStackNavigator<AuthScreenList>();

const AuthNavigator: React.FC = () => {
  const heiht = StatusBar.currentHeight;

  return (
    <Navigator initialRouteName="SignUp" screenOptions={{headerShown: false}}>
      <Screen name="SignUp" component={SignUp} />
      <Screen name="SetPassword" component={SetPassword} />
      <Screen name="VerifyOTP" component={VerifyOTP} />
    </Navigator>
  );
};

// const AuthNavigator: React.FC = () => {
//   return (
//     <SafeAreaProvider style={{flex: 1}}>
//       <BaseViewContainer backgroundColor="#fff">
//         {/* <Spacer/> */}
//         <Navigator
//           initialRouteName="Service"
//           screenOptions={{
//             headerShown: false,
//           }}>
//           <Screen name="Register" component={SignUpNavigator} />
//           <Screen name="Service" component={AccountService} />
//         </Navigator>
//       </BaseViewContainer>
//     </SafeAreaProvider>
//   );
// };

export default AuthNavigator;

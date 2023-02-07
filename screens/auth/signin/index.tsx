/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {InputWithLabel, TextInput} from '../../../components/input';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useRef, useState} from 'react';
import {BoldText, RegularText} from '../../../components/text/text';
import {
  Spacer,
  ViewContainer,
  BaseViewContainer,
  FlexedView,
} from '../../../components/view';
import {AuthScreenList} from '../../../navigators/auth/authParamList';
import {PrimaryButton} from '../../../components/button';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@emotion/react';
import {useDispatch} from 'react-redux';
import {setCredential} from '../../../store/auth';
import {TopHeader} from '../../../components/headers/topHeader';
import styled from '@emotion/native';
import Entypo from 'react-native-vector-icons/Entypo';

const Tab = styled.TouchableOpacity<{borderColor: string}>(({borderColor}) => ({
  borderBottomWidth: 4,
  borderBottomColor: borderColor,
  paddingBottom: 10,
  flex: 1,
}));

const SignInButton = styled.TouchableOpacity({
  paddingHorizontal: 15,
  paddingVertical: 10,
  borderRadius: 15,
  backgroundColor: '#EAECF0',
});

type AuthScreenProps = StackNavigationProp<AuthScreenList>;

const SignIn: React.FC = () => {
  const {navigate} = useNavigation<AuthScreenProps>();
  const [index, setIndex] = useState(0);
  const {colors} = useTheme();
  const [loginData, setLoginData] = useState({
    email: '',
    phone: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(true);
  const dispatch = useDispatch();

  const onChange = (field: string, value: string) => {
    setLoginData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const login = () => {
    dispatch(
      setCredential({
        user: {email: 'jos@gmail.com', phone: '09088776655'},
        access_token: 'cfdgv',
      }),
    );
  };

  return (
    <BaseViewContainer>
      <ViewContainer>
        <TopHeader
          rightComponent={
            <SignInButton onPress={() => navigate('SignUp')}>
              <RegularText
                color={colors.blackPrimary}
                fontSize={14}
                lineHeight={16}>
                Sign Up
              </RegularText>
            </SignInButton>
          }
        />
        <BoldText
          // onPress={() => {
          //   dispatch(setDidOnboard(false));
          // }}

          color={colors.blackPrimary}
          lineHeight={30}
          fontSize={24}>
          Sign In
        </BoldText>
        <RegularText
          marginTop={5}
          color={colors.textNormal}
          lineHeight={24}
          fontSize={16}>
          Welcome back.
        </RegularText>
      </ViewContainer>
      <Spacer />
      <FlexedView>
        <Tab
          onPress={() => setIndex(0)}
          borderColor={index === 0 ? colors.primary : colors.border}>
          <RegularText
            color={index === 0 ? colors.primary : colors.blackPrimary}
            textAlign="center"
            fontSize={14}
            lineHeight={16}>
            Email address
          </RegularText>
        </Tab>
        <Tab
          onPress={() => setIndex(1)}
          borderColor={index === 1 ? colors.primary : colors.border}>
          <RegularText
            color={index === 1 ? colors.primary : colors.blackPrimary}
            textAlign="center"
            fontSize={14}
            lineHeight={16}>
            Phone number
          </RegularText>
        </Tab>
      </FlexedView>
      <ViewContainer>
        <Spacer />
        {index === 0 ? (
          <>
            <InputWithLabel
              onChangeText={text => onChange('email', text)}
              value={loginData.email}
              label="Email Address"
            />
            {/* <InputWithLabel onChangeText={text => onChange('Password', text)} value={loginData.password} label="Password" /> */}
          </>
        ) : (
          <>
            <InputWithLabel
              onChangeText={text => onChange('phone', text)}
              value={loginData.phone}
              label="Phone number"
            />
          </>
        )}
        <InputWithLabel
          value={loginData.password}
          onChangeText={text => onChange('password', text)}
          label="Password"
          secureTextEntry={showPassword}
          rightIcon={
            <Entypo
              onPress={() => setShowPassword(!showPassword)}
              size={22}
              name={showPassword ? 'eye-with-line' : 'eye'}
            />
          }
        />
        <PrimaryButton
          onPress={login}
          text="Sign in"
          disabled={
            (!loginData.email || !loginData.phone) && !loginData.password
          }
        />
        <Spacer />
        <RegularText
          onPress={() => navigate('ForgotPassword')}
          color={colors.primary}
          textAlign="center"
          fontSize={14}
          lineHeight={20}>
          Forgot password's
        </RegularText>
      </ViewContainer>
    </BaseViewContainer>
  );
};

export default SignIn;

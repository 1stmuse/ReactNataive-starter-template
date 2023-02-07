/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable quotes */
/* eslint-disable space-infix-ops */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {
  BoldText,
  RegularText,
  SemiBoldText,
} from '../../../components/text/text';
import {View, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {PrimaryButton} from '../../../components/button';
import {FlexedView, Spacer, ViewContainer} from '../../../components/view';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthScreenList} from '../../../navigators/auth/authParamList';
import {useDispatch} from 'react-redux';
import {setCredential} from '../../../store/auth';
import OtpInputs from 'react-native-otp-inputs';
import {fontPixel, heightPixel} from '../../../utility/pxToDpConvert';
import {useTheme} from '@emotion/react';

type navProps = StackNavigationProp<AuthScreenList>;

const VerifyOTP: React.FC = () => {
  const {navigate} = useNavigation<navProps>();
  const [seconds, setSeconds] = useState<number>(60);
  const [otp, setOtp] = useState('');
  const {colors} = useTheme();

  const dispatch = useDispatch();

  const startTimer = () => {
    const timer = setTimeout(() => {
      if (seconds <= 0) {
        clearTimeout(timer);
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  }, [seconds]);

  useEffect(() => {
    if (otp.length === 4) {
      dispatch(
        setCredential({
          user: {email: 'scgyv', phone: 'ddhdvb'},
          access_token: 'sdf',
        }),
      );
    }
  }, [otp]);

  return (
    <ViewContainer style={styles.container}>
      <Spacer height={100} />
      <BoldText fontSize={29}>Verification Code</BoldText>
      <Spacer />
      <OtpInputs
        handleChange={code => setOtp(code)}
        numberOfInputs={4}
        style={styles.otpView}
        // inputContainerStyles={styles.otpBox}
        focusStyles={[styles.otpBox, styles.otpFocus]}
        secureTextEntry={true}
        inputStyles={styles.otpBox}
      />

      {seconds <= 0 ? (
        <FlexedView justifyContent="center">
          <SemiBoldText>Didnt receive any code?</SemiBoldText>
          <TouchableOpacity onPress={() => setSeconds(60)}>
            <SemiBoldText marginLeft={5} color={colors.primary}>
              Please resend
            </SemiBoldText>
          </TouchableOpacity>
        </FlexedView>
      ) : (
        <SemiBoldText fontSize={fontPixel(17)} textAlign="center">
          {`${Math.floor(seconds / 60)} : ${seconds % 60}`}
        </SemiBoldText>
      )}
      <Spacer />
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  otpView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  otpBox: {
    width: heightPixel(70),
    height: heightPixel(70),
    borderWidth: 0.5,
    borderRadius: 10,
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 2,
    backgroundColor: '#fff',
  },
  otpFocus: {
    borderColor: '#4AA635',
    borderWidth: 0.5,
  },
});

export default VerifyOTP;

/* eslint-disable quotes */
/* eslint-disable space-infix-ops */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {BoldText, RegularText} from '../../../components/text/text';
import {View, StyleSheet, Pressable, Text} from 'react-native';
import React, {useState} from 'react';
import {PrimaryButton} from '../../../components/button';
import {Spacer, ViewContainer} from '../../../components/view';
import {InputWithLabel} from '../../../components/input';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  checkSpecialChar,
  isUpperCase,
  hasNumber,
} from '../../../utility/helpers';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthScreenList} from '../../../navigators/auth/authParamList';

const check = <Icon name="check" size={12} color="#fff" />;

type passwordCondition = {
  title: string;
  condition: boolean;
};

type navProps = StackNavigationProp<AuthScreenList>;

interface IPasswordProps {
  conditions: Array<passwordCondition>;
  value?: string;
}

const PasswordCondition: React.FC<IPasswordProps> = ({conditions}): any =>
  conditions.map((item, i) => (
    <View key={i} style={{display: 'flex', flexDirection: 'row'}}>
      <View style={{marginTop: 10}}>
        <Text
          style={item.condition ? styles.cirleActive : styles.cirleInActive}>
          {check}
        </Text>
      </View>
      <View style={{marginTop: 10}}>
        <BoldText fontSize={13} style={{marginLeft: 10}}>
          {' '}
          {item.title}{' '}
        </BoldText>
      </View>
    </View>
  ));

const SetPassword: React.FC = () => {
  const [show, setShow] = useState<boolean>(true);
  const {navigate} = useNavigation<navProps>();
  const [password, setPassword] = useState<string>('');

  const submit = () => {
    navigate('VerifyOTP');
  };

  const passwordConditions: passwordCondition[] = [
    {
      title: 'Password must be 8 characters',
      condition: password?.length >= 8 ? true : false,
    },
    {
      title: 'At least 1 uppercase letter',
      condition: isUpperCase(password),
    },
    {
      title: 'At least 1 number',
      condition: hasNumber(password),
    },

    {
      title: 'At least 1 special character (e.g. @$!%*#?&)',
      condition: checkSpecialChar(password),
    },
  ];
  return (
    <ViewContainer style={styles.container}>
      <Spacer height={30} />
      <BoldText fontSize={29}>Set up password</BoldText>
      <Spacer />
      <RegularText color="#828282" fontSize={15} marginBottom={20}>
        Begin a journey to accessing great chefs at your convenience. Your
        details will be used to log in to your account
      </RegularText>

      <InputWithLabel
        secureTextEntry={show}
        label="Password"
        labelStyle={{fontSize: 16}}
        value={password}
        onChangeText={(value: string) => setPassword(value)}
        rightIcon={
          <Pressable onPress={() => setShow(!show)}>
            <Icon name={show ? 'eye-slash' : 'eye'} size={20} color="#ababab" />
          </Pressable>
        }
      />
      <View style={{marginBottom: 90}}>
        <BoldText fontSize={18} style={{width: '80%'}}>
          Your password must have:
        </BoldText>
        <View style={{marginBottom: 24}}>
          <PasswordCondition conditions={passwordConditions} value={password} />
        </View>
      </View>
      <PrimaryButton onPress={submit} text="Next" />
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  cirleActive: {
    backgroundColor: '#FE724C',
    borderRadius: 60,
    paddingTop: 3,
    paddingBottom: 3,
    width: 20,
    textAlign: 'center',
  },
  cirleInActive: {
    backgroundColor: '#656565',
    borderRadius: 60,
    paddingTop: 3,
    paddingBottom: 3,
    width: 20,
    textAlign: 'center',
  },
});

export default SetPassword;

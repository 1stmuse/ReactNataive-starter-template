/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {BoldText} from '../../../components/text/text';
import {Spacer, ViewContainer} from '../../../components/view';
import {AuthScreenList} from '../../../navigators/auth/authParamList';

import {useNavigation} from '@react-navigation/native';

type AuthScreenProps = StackNavigationProp<AuthScreenList, 'SignUp'>;

const SignUp: React.FC = () => {
  const {navigate} = useNavigation<AuthScreenProps>();

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <ViewContainer style={styles.container}>
        <Spacer height={30} />
        <BoldText fontSize={28} style={{width: '80%'}}>
          sign up
        </BoldText>
      </ViewContainer>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default SignUp;

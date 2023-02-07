import styled from '@emotion/native';
import React from 'react';
import { Platform, StatusBar } from 'react-native';


const KeyboardAvoidingView = styled.KeyboardAvoidingView({
  flex: 1
});

const View = styled.View({
  flex: 1,
  height: '100%',
  width: '100%'
});

const CustomKeyboardAvoidingView: React.FC = ({ children }) => {
 
  return (
    <KeyboardAvoidingView
      contentContainerStyle={{ flex: 1 }}
      behavior={Platform.select({ ios: 'padding', android: 'height' })}
      keyboardVerticalOffset={50}
      enabled={true}
    >
      <StatusBar />
      <View>{children}</View>
    </KeyboardAvoidingView>
  );
};

export default CustomKeyboardAvoidingView;

/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import styled from '@emotion/native';
import PhoneInput from "react-native-phone-number-input";
import {
  Keyboard,
  PressableProps,
  StyleProp,
  TextInputProps,
  TextStyle,
  ViewStyle,
  View
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
// import { useTheme } from '@react-navigation/native';
import { useTheme } from '@emotion/react';
import { TextInput as Base } from 'react-native';
import { font } from '../../utility/fonts';
import { RegularText, SemiBoldText } from '../text/text';
import {
  fontPixel,
  heightPixel,
  widthPixel
} from '../../utility/pxToDpConvert';

import moment from 'moment';
import { ActivityIndicator } from 'react-native-paper';
import { Icon } from 'react-native-elements';

const paddingHorizontal = wp(3.5);
const borderRadius = widthPixel(20);

interface IProps {
  borderColor?: string;
  backgroundColor?: string;
  borderRadius?: number;
}

export const Input = styled(Base)({
  fontFamily: font.regular,
  fontSize: 15,
  flex: 8,
  height: 50,
  backgroundColor: 'transparent'
});

export const InputWrapper = styled.View<IProps>((props) => ({
  borderColor: props.borderColor,
  backgroundColor: props.backgroundColor,
  borderWidth: 1,
  borderRadius: 8,
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal
}));




export const BottomText = styled(RegularText)({
  paddingLeft: widthPixel(15),
  paddingTop: heightPixel(2)
});

export interface InputProps extends TextInputProps {
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  bottomText?: string;
  error?: boolean;
  secureTextEntry?:boolean;
  containerStyle?: StyleProp<ViewStyle>;
  phone?: boolean
}

export const TextInput: React.FC<InputProps> = ({
  keyboardType,
  style,
  secureTextEntry,
  leftIcon,
  rightIcon,
  editable = true,
  bottomText,
  error,
  containerStyle,
  phone=false,
  ...rest
}) => {
  const [active, setActive] = useState<boolean>(Boolean(rest.value));
  const { colors } = useTheme();

  return (
    <>
      <InputWrapper
        borderColor={
          active || !Boolean(editable) ? colors.primary : colors.border
        }
        backgroundColor={
          active || !Boolean(editable) ? colors.background : "transparent"
        }
        style={containerStyle}
      
      >
        {leftIcon}
        { phone ? (
          <PhoneInput 
            textInputProps={{
              onFocus: () => setActive(true),
              onBlur: () => setActive(false)
            }}
          />
        ) :
        <Input
          style={style}
          editable={editable}
          {...rest}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          placeholderTextColor="#828282"
        />}
        {rightIcon}
      </InputWrapper>
      {bottomText ? (
        <View style={{ flexDirection: 'row' }}>
          <Icon
            style={{ marginTop: 6 }}
            name="circle"
            size={10}
            color="#FFA200"
            tvParallaxProperties={undefined}
          />
          <BottomText color={error ? colors.yellow : colors.text}>
            {bottomText}
          </BottomText>
        </View>
      ) : null}
    </>
  );
};



const Wrapper = styled.View({
  marginBottom: heightPixel(20)
});
const IconWrap = styled.View({
  marginRight: widthPixel(16.5),
  marginLeft: widthPixel(10)
});
const Label = styled(SemiBoldText)({
  marginBottom: heightPixel(16),
  fontSize: fontPixel(14),
  lineHeight: fontPixel(17.07)
});
export interface ITextInputWithLabel extends InputProps {
  label?: string;
  placeholder?: string;
  containerStyle?: ViewStyle;
  editable?: boolean;
  labelStyle?: TextStyle;
  rightIcon?: React.ReactElement;
  leftIcon?: React.ReactElement;
  inputWrapperStyle?: ViewStyle;
  phone?: boolean;
  onInputFocus?: () => void,
  uneditBg?: string
}
export const InputWithLabel: React.FC<ITextInputWithLabel> = ({
  label,
  labelStyle,
  containerStyle,
  leftIcon,
  secureTextEntry,
  placeholder,
  editable = true,
  bottomText,
  rightIcon,
  error,
  inputWrapperStyle,
  phone = false,
  onInputFocus,
  uneditBg,
  ...rest
}) => {
  const { colors } = useTheme();
  const [isBlurred, setIsBlurred] = useState<boolean>(true)

  return (
    <Wrapper style={containerStyle}>
      {!!label && <Label style={[ {color: colors.border} , labelStyle]}>{label}</Label>}
      <InputWrapper
        borderColor={isBlurred ? colors.border : colors.primary}
        backgroundColor={!editable  ? uneditBg || colors.border : "transparent"}
        style={inputWrapperStyle}
      >
        {leftIcon && <IconWrap>{leftIcon}</IconWrap>}
        {phone ? (
          <PhoneInput {...rest}
          containerStyle={{backgroundColor:"transparent", alignItems:"center"}}  
          textContainerStyle={{backgroundColor:"transparent"}}    
          textInputProps={{
            onFocus: () => setIsBlurred(false),
            onBlur:  () => setIsBlurred(true)
          }}      
          />
        ) :
        <Input
          // style={style}
          placeholder={placeholder}
          {...rest}
          secureTextEntry={secureTextEntry}
          editable={editable}
          placeholderTextColor="#828282"
          onBlur={() => setIsBlurred(true)}
          onFocus={ onInputFocus ? onInputFocus :() => setIsBlurred(false)}
        />}

        {rightIcon}
      </InputWrapper>
      {bottomText ? (
        <BottomText color={error ? colors.yellow : colors.text}>
          * {bottomText}
        </BottomText>
      ) : null}
    </Wrapper>
  );
};


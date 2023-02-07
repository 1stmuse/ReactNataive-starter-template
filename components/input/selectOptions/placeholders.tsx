import styled from '@emotion/native';
import React, { createRef, ReactElement, useState } from 'react';
import { BoldText, RegularText } from '../../text/text';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  fontPixel,
  heightPixel,
  widthPixel
} from '../../../utility/pxToDpConvert';
import { useTheme } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { ViewStyle, TextStyle } from 'react-native';
import { InputWrapper } from '../index';
import { font } from '../../../utility/fonts';

const IconWrapper = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginRight: wp(2)
});

const InputSection = styled.View({
  flexGrow: 1
});

export const BottomText = styled(RegularText)({
  paddingLeft: widthPixel(15),
  paddingBottom: heightPixel(10)
});

export type SelectInputProps = {
  title: string;
  value: string | undefined;
  bottomText?: string;
  inputError?: boolean;
  bottomTextOnError?: boolean;
  textAlign?: TextStyle['textAlign'];
  width?: number;
  solid?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle
  placeHolderStyle?: TextStyle,
  iconColor?: string
  rightIcon?: ReactElement
};

export const SelectInputPlaceholder: React.FC<SelectInputProps> = ({
  title,
  value,
  bottomText,
  bottomTextOnError = true,
  inputError = false,
  solid = false,
  textAlign = 'left',
  width,
  style,
  textStyle,
  placeHolderStyle,
  iconColor,
  rightIcon
}) => {
  const { colors } = useTheme();

  const hasVal = (value && value.length);

  return (
    <>
      <InputWrapper
        solid={solid}
        error={inputError}
        style={{
          opacity: 1,
          borderWidth: 0.7,
          borderColor: colors.border,
          backgroundColor: "transparent",
          paddingHorizontal: 15,
          width: width,
          minHeight: 50,
          borderRadius: 10,
          ...style
        }}
      >
        <InputSection>
            <RegularText 
              textAlign={textAlign} 
              style={textStyle} 
              fontSize={fontPixel(15)}
              lineHeight={20}
              color={(value && value.length) ? "#000" : "#828282"}
          >{(value && value.length) ? value: title}</RegularText>          
        </InputSection>
        <IconWrapper>
          {rightIcon ? rightIcon :
          <AntDesign size={fontPixel(15)} color={ iconColor ? iconColor : colors.text} name={'down'} />}
        </IconWrapper>
      </InputWrapper>
      {/* {(bottomText && !bottomTextOnError) ||
      (bottomText && bottomTextOnError && inputError) ? (
        <BottomText color={inputError ? colors.notification : colors.text}>
          {bottomText}
        </BottomText>
      ) : null} */}
    </>
  );
};

/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  ActivityIndicator,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {  heightPixel, widthPixel } from '../../utility/pxToDpConvert';
import { SemiBoldText } from '../text/text';


interface ButtonStylePropsExtra {
  backgroundColor: string;
  borderColor?: string;
  bottom?: boolean;
  height?: number

}

const SolidView = styled.TouchableOpacity<ButtonStylePropsExtra>(
  ({ backgroundColor, borderColor, disabled, bottom, height = 5 }) => ({
    borderRadius: widthPixel(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: disabled ? "#C9C9C9" : backgroundColor,
    borderColor,
    height: hp(height) ?? hp(5.5),
    minHeight: 30,
    position: bottom ? "absolute" : undefined,
    width: bottom ? "100%" : undefined,
    marginHorizontal: bottom ? 20 : undefined,
    bottom:bottom ? heightPixel(50) : undefined,
  })
);

export const BtnView = styled.View<ButtonStylePropsExtra>(
  ({backgroundColor , borderColor}) =>({
    borderRadius:8 ,
    display:"flex",
    flexDirection:"row",
    borderColor,
    padding:21,
    backgroundColor,
    justifyContent:"space-around",
  })
);


const Text = styled(SemiBoldText)(
  {
    textAlign: 'center',
  },
  (props) => ({
    color: props.color,
    paddingHorizontal: widthPixel(15),
  })
);

interface ButtonProps {
  onPress?: () => void;
  text: string;
  style?: StyleProp<ViewStyle>;
  isLoading?: boolean;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  icon?:React.ReactElement
  color?: string
  bottom?: boolean
  height?: number
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  isLoading,
  text,
  onPress,
  style,
  textStyle,
  disabled,
  color,
  bottom,
  height
}) => {
  const { colors } = useTheme();

  return (
    <SolidView
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}
      backgroundColor={isLoading ? '#9A9FAE' : colors.primary}
      style={style}
      bottom={bottom}
      height={height}
    >
      {!isLoading ? (
        <Text color={color || "#fff"} style={textStyle}>
          {text}
        </Text>
      ) : (
        <ActivityIndicator color="#fff" animating={isLoading} size="small" />
      )}
    </SolidView>
  );
};

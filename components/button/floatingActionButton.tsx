/* eslint-disable prettier/prettier */
import React from 'react';
import styled from '@emotion/native';
import { useTheme } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { Pressable, StyleProp, ViewStyle } from 'react-native';
import { heightPixel, widthPixel } from '../../utility/pxToDpConvert';
import { MediumText } from '../text/text';

const TouchableOpacity = styled.TouchableOpacity<{ backgroundColor: string }>(
  ({ backgroundColor }) => ({
    backgroundColor,
    width: wp(12),
    height: wp(12),
    borderRadius: wp(6),
    padding: 5,
    borderWidth: 1,
    borderColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#c4c4c4',
    shadowOpacity: 0.3,
    bottom: 30,
    right: wp(5),
    position: 'absolute'
  })
);

const FloatSection = styled.View({
  flexDirection: "row",
  alignItems: 'center',
  marginBottom: heightPixel(20),
  justifyContent: 'flex-end'
})

const FloatButtonSection = styled.TouchableOpacity<{ backgroundColor: string }>(
  ({ backgroundColor }) => ({
    backgroundColor,
  borderRadius: wp(6),
  justifyContent: 'center',
  alignItems: 'center',
  width: wp(11),
  height: wp(11),
  elevation: 10,
  shadowColor: '#c4c4c4',
  shadowOpacity: 0.3,
}));

const FloatTextSection = styled.TouchableOpacity({
  backgroundColor: 'rgba(160, 105, 177, 1)',
  paddingHorizontal: widthPixel(20),
  paddingVertical: heightPixel(10),
  borderRadius: 20,
  marginRight: widthPixel(15),
  elevation: 10,
  shadowColor: '#c4c4c4',
  shadowOpacity: 0.3,
});


export const FloatIconSize = wp(5);
export const FloatBigIconSize = wp(7);



interface IProp {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  icon?: React.ReactElement;
}

interface FloatSectionIProp {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  text: string;
  icon?: React.ReactElement;
}


export const FloatingButton: React.FC<IProp> = ({ onPress, style, icon }) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      backgroundColor={colors.primary}
      activeOpacity={0.8}
      style={style}
      onPress={onPress}
    >
      {icon ?? <Ionicons name="md-add" color="#ffffff" size={wp(7)} />}
    </TouchableOpacity>
  );
};

export const FloatingButtonSection: React.FC<FloatSectionIProp> = ({
  onPress,
  text,
  icon
}) => {
  const { colors } = useTheme();

  return (
    <FloatSection >
      <FloatTextSection onPress={onPress}>
        <MediumText color="#ffffff">{text}</MediumText>
      </FloatTextSection>
      <FloatButtonSection backgroundColor={colors.primary} onPress={onPress}>
        {icon ?? <Ionicons name="md-add" color="#ffffff" size={wp(7)} />}
      </FloatButtonSection>
    </FloatSection>
  );
}

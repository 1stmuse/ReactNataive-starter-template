import { useTheme } from '@emotion/react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, TextStyle, ViewStyle } from 'react-native';
import { HeaderContainer, HeaderIcon, HeaderTitle } from '.';
import { fontPixel } from '../../utility/pxToDpConvert';

export const TopHeader: React.FC<{
  title?: string;
  floating?: boolean;
  leftComponent?: React.ReactElement;
  rightComponent?: React.ReactElement;
  centerComponent?: React.ReactElement;
  containerStyle?: ViewStyle;
  titleTextStyle?: TextStyle;
  backButtonProp?: any;
  onBackPress?: () =>void
}> = ({
  title,
  leftComponent,
  rightComponent,
  centerComponent,
  containerStyle,
  titleTextStyle,
  floating,
  backButtonProp,
  onBackPress
}) => {
    const { colors } = useTheme();
    const { goBack } = useNavigation();

  return (
    <HeaderContainer style={containerStyle} float={floating}>
      <Pressable onPress={onBackPress ? onBackPress : goBack}>
      {
      leftComponent ?? (
        <AntDesign
          name={'arrowleft'}
          color={colors.text}
          size={fontPixel(24)}
          {...backButtonProp}
        />
      )}
      </Pressable>
      {centerComponent ?? (
        <HeaderTitle color={colors.text} style={titleTextStyle}>
          {title}
        </HeaderTitle>
      )}

      {rightComponent ?? (
        <AntDesign
          name={'arrowleft'}
          color={'transparent'}
          size={fontPixel(24)}
        />
      )}
    </HeaderContainer>
  );
};

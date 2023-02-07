/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import styled from '@emotion/native';
import {TextStyle, ViewStyle, useWindowDimensions} from 'react-native';
import {fontPixel} from '../../utility/pxToDpConvert';
import {font} from '../../utility/fonts';

export const RegularText = styled.Text<{
  fontSize?: TextStyle['fontSize'];
  lineHeight?: TextStyle['lineHeight'];
  color?: string;
  marginLeft?: ViewStyle['marginLeft'];
  marginTop?: ViewStyle['marginTop'];
  marginBottom?: ViewStyle['marginBottom'];
  textAlign?: TextStyle['textAlign'];
}>(
  ({
    fontSize = 12,
    lineHeight = fontSize * 1.7,
    color,
    marginTop,
    marginBottom,
    marginLeft,
    textAlign,
    theme,
  }) => ({
    fontSize: fontPixel(fontSize),
    lineHeight: fontPixel(lineHeight),
    color: color ?? theme.colors.text,
    marginTop,
    marginBottom,
    textAlign,
    marginLeft,
  }),
);
export const MediumText = styled(RegularText)({
  fontWeight: '500',
});
export const SemiBoldText = styled(RegularText)({
  fontWeight: '600',
});
export const BoldText = styled(RegularText)({
  fontWeight: 'bold',
});

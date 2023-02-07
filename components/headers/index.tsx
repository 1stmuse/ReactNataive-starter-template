import styled from '@emotion/native';
import { Platform } from 'react-native';
import {
  fontPixel,
  heightPixel,
  widthPixel
} from '../../utility/pxToDpConvert';
import { BoldText } from '../text/text';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const HeaderContainer = styled.View<{ float?: boolean }>(
  ({ float }) => ({
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: heightPixel(8),
    backgroundColor: float ? '#fff' : 'transparent',
    paddingHorizontal: 20,
    position: float ? 'absolute' : 'relative',
    zIndex: float ? 100 : 0,
    paddingTop: 10
  })
);

export const HeaderTitle = styled(BoldText)({
  fontSize: fontPixel(18),
  lineHeight: fontPixel(21.94),
  textAlign: 'center',
  flex: 1
});

export const HeaderIcon = styled.View({
  zIndex: 3,
  justifyContent: 'center'
});

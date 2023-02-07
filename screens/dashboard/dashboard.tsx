/* eslint-disable prettier/prettier */
import React from 'react';
import {useTheme} from '@emotion/react';
import {BaseViewContainer, Spacer, ViewContainer} from '../../components/view';
import {BoldText} from '../../components/text/text';

const HomeScreen: React.FC = ({}) => {
  const {colors} = useTheme();
  return (
    <BaseViewContainer backgroundColor={colors.white} style={{flex: 1}}>
      <ViewContainer style={{flex: 1}}>
        <Spacer />

        <BoldText>Dash oard</BoldText>
      </ViewContainer>
    </BaseViewContainer>
  );
};

export default HomeScreen;

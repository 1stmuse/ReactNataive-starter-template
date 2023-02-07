import React from 'react';
import {
  BaseViewContainer,
  Spacer,
  ViewContainer,
} from '../../../components/view';
import {BoldText} from '../../../components/text/text';
import {useTheme} from '@emotion/react';

export const Orders = () => {
  const {colors} = useTheme();

  return (
    <BaseViewContainer backgroundColor={colors.white}>
      <ViewContainer>
        <Spacer />
        <BoldText>Orders</BoldText>
      </ViewContainer>
    </BaseViewContainer>
  );
};

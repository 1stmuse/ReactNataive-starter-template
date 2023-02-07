import {ScrollView} from 'react-native';
import React from 'react';
import {BaseViewContainer, ViewContainer} from '../../../components/view';

import {BoldText} from '../../../components/text/text';
import {useTheme} from '@emotion/react';

export const Settings = () => {
  const {colors} = useTheme();

  return (
    <BaseViewContainer backgroundColor={colors.white}>
      <ScrollView contentContainerStyle={{paddingBottom: 30}}>
        <ViewContainer style={{flex: 1}}>
          <BoldText>Settings</BoldText>
        </ViewContainer>
      </ScrollView>
    </BaseViewContainer>
  );
};

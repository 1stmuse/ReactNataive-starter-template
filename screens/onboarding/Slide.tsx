import React from 'react';
import {View, Text, useWindowDimensions, StyleSheet} from 'react-native';
import {Slide} from './data';
import {RegularText, BoldText} from '../../components/text/text';
import {useTheme} from '@emotion/react';

interface Iprops {
  data: Slide;
  index: number;
}

const Slider: React.FC<Iprops> = ({
  data: {Image, id, text, title, redTitle, thirdText},
  index,
}) => {
  const {width, height} = useWindowDimensions();
  const {colors} = useTheme();
  return (
    <View style={[{width}]}>
      <Image />
      {/* <View style={[styles.image_view]}>
          <Image
            source={data.image}
            resizeMode="contain"
            style={{width: width / 2 + 50, height: height / 4 + 20}}
          />
        </View> */}
      <View style={styles.texts_view}>
        {/* <FlexedView> */}
        <BoldText
          textAlign="center"
          fontSize={28}
          marginBottom={5}
          style={{width: index === 2 || index === 1 ? '70%' : '80%'}}
          lineHeight={32}>
          {index === 1 && (
            <BoldText
              color={colors.primary}
              fontSize={28}
              marginBottom={5}
              lineHeight={32}>
              {redTitle}
            </BoldText>
          )}
          {`${title} `}
          {(index === 0 || index === 2 || index === 3) && (
            <BoldText
              color={colors.primary}
              fontSize={28}
              marginBottom={5}
              lineHeight={32}>
              {redTitle}
            </BoldText>
          )}
          {index === 3 && (
            <BoldText fontSize={28} marginBottom={5} lineHeight={32}>
              {` ${thirdText}`}
            </BoldText>
          )}
        </BoldText>

        <RegularText lineHeight={24} fontSize={16} textAlign="center">
          {text}
        </RegularText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  skipView: {
    alignItems: 'flex-end',
    paddingHorizontal: 15,
    marginBottom: 30,
  },
  image_view: {
    // flex:0.9,
    // borderWidth:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texts_view: {
    // flex: 0.4,
    alignItems: 'center',
    width: '100%',
    marginTop: 15,
    paddingHorizontal: 20,
  },
});

export default Slider;

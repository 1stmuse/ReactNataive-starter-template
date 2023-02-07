import {useTheme} from '@emotion/react';
import React from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import {Slide} from './data';
import styled from '@emotion/native';

const Progress = styled.View<ViewStyle>(() => ({
  width: 20,
  height: 5,
  marginRight: 5,
}));

interface Iprops {
  slides: Slide[];
  index: number;
}

const Dots: React.FC<Iprops> = ({slides, index}) => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      {slides.map((ob, i) => {
        return (
          <Progress
            key={ob.id}
            backgroundColor={i === index ? colors.primary : colors.border}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  dots: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    backgroundColor: 'grey',
    marginLeft: 10,
  },
});
export default Dots;

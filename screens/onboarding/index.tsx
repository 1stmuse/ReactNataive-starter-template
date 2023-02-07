/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useRef, useState} from 'react';
import {useTheme} from '@emotion/react';
import {View, FlatList, useWindowDimensions, ViewToken} from 'react-native';
import {Spacer, ViewContainer} from '../../components/view';
import {BoldText} from '../../components/text/text';
import OnBoard from '../../assets/svgs/OnboardingImg.svg';
import {Animated} from 'react-native';
import {Slides} from './data';
import Slider from './Slide';
import Dots from './Dots';
import {PrimaryButton} from '../../components/button';
import {RootScreenList} from '../../navigators/RootStackSceenList';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-async-storage/async-storage';
import {setDidOnboard} from '../../store/auth';
import {useDispatch} from 'react-redux';

type nav = StackNavigationProp<RootScreenList>;

const Onboarding: React.FC = ({}) => {
  const {colors} = useTheme();
  const {navigate} = useNavigation<nav>();
  const scrollX = useRef(new Animated.Value(0)).current;
  const {width} = useWindowDimensions();
  const slideRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();

  const scrollTo = () => {
    if (currentIndex < Slides.length - 1) {
      slideRef.current.scrollToIndex({index: currentIndex + 1});
    }
  };

  const onViewableItemsChanged = React.useRef(
    (info: {viewableItems: ViewToken[]; changed: ViewToken[]}) => {
      const newIndex = info.viewableItems[0].index;
      setCurrentIndex(newIndex as number);
    },
  ).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  return (
    <View style={{backgroundColor: colors.white, flex: 1}}>
      <View>
        <FlatList
          // style={{flex:1}}
          pagingEnabled
          scrollEventThrottle={32}
          horizontal
          bounces={false}
          data={Slides}
          keyExtractor={ob => ob.id}
          renderItem={({item, index}) => <Slider index={index} data={item} />}
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slideRef}
        />
        <Spacer />
        <Dots slides={Slides} index={currentIndex} />
        <ViewContainer>
          <PrimaryButton
            height={7}
            text="Get started"
            textStyle={{fontSize: 14, lineHeight: 18, fontWeight: '800'}}
            onPress={() => {
              dispatch(setDidOnboard(true));

              navigate('AuthNavigator', {
                screen: 'SignUp',
              });
            }}
          />
          {/* <Spacer /> */}
          <PrimaryButton
            style={{marginTop: 5, backgroundColor: colors.white}}
            height={7}
            text="Sign in"
            textStyle={{
              fontSize: 14,
              lineHeight: 18,
              fontWeight: '800',
              color: colors.blackPrimary,
            }}
            onPress={() => {
              dispatch(setDidOnboard(true));
              navigate('AuthNavigator', {
                screen: 'SignIn',
              });
            }}
          />
        </ViewContainer>
      </View>
    </View>
  );
};

export default Onboarding;

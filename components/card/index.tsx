import React from 'react'
import styled from '@emotion/native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

export const Card = styled.View<{ backgroundColor?: string, shadow?: boolean, bordered?: boolean , borderColor?: string}>(
  ({ backgroundColor, shadow = false, bordered= false, borderColor = undefined }) => { 
    const hasShadow = shadow ? {shadowColor: "rgba(0,0,0,0.3)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    
    elevation: 7,} : {}
    return ({
    backgroundColor,
    padding: wp(2),
    ...hasShadow,
    borderWidth: bordered ? .5 : 0,
    borderColor
  })
})

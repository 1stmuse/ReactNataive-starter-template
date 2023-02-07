/* eslint-disable prettier/prettier */
import styled from '@emotion/native';
import React, { useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { CheckBox, Image } from 'react-native-elements';
import { StyleProp } from 'react-native';
import { defaultImg } from '../../utility/defaultImages';
import { heightPixel, widthPixel } from '../../utility/pxToDpConvert';


const CheckBoxWrapper = styled.View({
    flexDirection: "row",
    alignItems:"center",
});

const checkBoxStyle = {
    borderWidth: 0,
    paddingHorizontal: 0,
    marginLeft: 0,
    backgroundColor: "transparent"
};

const CheckedIcon = styled(Image)({
    height: widthPixel(23),
    width: widthPixel(23),
})

type IProps = {
    condition: boolean,
    unchecked?: string,
    title?: string,
    customCheckBoxStyle?: StyleProp<any>
    onPress: () => any ,
    styles?:StyleProp<any>
}



const CustomCheckBox: React.FC<IProps> = ({
    title,
    condition,
    onPress,
    styles
}) => {
    const { colors } = useTheme();

    return (
        <CheckBoxWrapper>
            <CheckBox
                title={title}
                style={[styles,]}
                fontFamily="Montserrat_400Regular"
               // containerStyle={{ ...checkBoxStyle, ...customCheckBoxStyle }}
                checkedColor={colors.primary}
                uncheckedIcon={(<CheckedIcon  style={{tintColor:colors.border}} source={require('../../assets/imgs/Checkbox.png')}/>)}
                checkedIcon={(<CheckedIcon  style={{tintColor:colors.primary}} source={require('../../assets/imgs/Checkbox.png')}/>)}
                checked={condition}
                onPress={onPress}
            />
        </CheckBoxWrapper>
    );
};

export default CustomCheckBox;
/* eslint-disable prettier/prettier */
import styled from '@emotion/native';
import React, { createRef, useState } from 'react';
import { ActivityIndicator, Platform, ScrollView, StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import { fontPixel, heightPixel, widthPixel } from '../../../utility/pxToDpConvert';
import { Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { BoldText, MediumText } from '../../text/text';
import { Picker } from '@react-native-picker/picker';

export const LoadingContainer = styled.View<{top?: string|number, bottom?: string|number}>(({ 
    top, bottom 
  }) => ({
    paddingTop: top ?? '50%',
    paddingBottom: bottom
  }));

const textState = {
    active: "#000",
    inactive: "#828282"
}

const SelectPlanButton = styled.View({
    paddingLeft: widthPixel(17),
    paddingRight: widthPixel(29),
    paddingVertical: heightPixel(16),
    backgroundColor: 'transparent',
    borderRadius: widthPixel(20)
});

const SelectText = styled.Text({
    fontFamily: 'Montserrat_400Regular',
    fontSize: fontPixel(15),
    color: textState?.inactive
})

const SelectPlanRender = styled.View({
    paddingHorizontal: widthPixel(21),
    maxHeight: heightPixel(250),
});

const SelectOptionActionSheet = styled.View({
    paddingHorizontal: widthPixel(20),
    paddingVertical: heightPixel(20),
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.5
});

const DecisionBar = styled.View({
    flexDirection: "row",
    paddingVertical: heightPixel(17),
    paddingHorizontal: widthPixel(25),
    backgroundColor: "rgba(106, 35, 129, 0.05)",
    justifyContent: "space-between",
})

const AndroidSelectOptions = styled.TouchableOpacity<{
    selected: boolean;
}>(({ selected }) => ({
    backgroundColor: (selected) ? "#6A2381" : "rgba(106, 35, 129, 0.05)",
    paddingVertical: heightPixel(17),
    paddingHorizontal: widthPixel(25),
    borderRadius: 10,
    marginTop: heightPixel(12)
}));

const AndroidSelectContainer = styled.View({
    paddingTop: heightPixel(8),
    paddingBottom: heightPixel(20),
})

const TitleBox = styled.View({

})


export type ActionSheetDataOptions = {
    label: string;
    value: string;
}

type IProps = {
    options: ActionSheetDataOptions[],
    category?: string;
    editable?: boolean;
    title: string,
    onSelect?: (item: ActionSheetDataOptions) => void,
    renderPlaceholder: React.ReactElement | React.FC,
    isLoading?: boolean
}

export const ActionSheetOptions: React.FC<IProps> = ({
    title,
    category = "Select Option",
    editable = true,
    options,
    onSelect,
    renderPlaceholder,
    isLoading
}) => {
    const { colors } = useTheme();
    const [selected, setSelected] = useState<ActionSheetDataOptions>();
    let actionSheet;

    const actionSheetRef: any = createRef();


    const renderPlans = (data: ActionSheetDataOptions[]) => {
        return Platform.OS === 'ios' ? (
            <Picker
                selectedValue={selected?.value}
                onValueChange={(itemValue, itemIndex) => {
                    if (itemValue.length) {

                        setSelected(data[(itemIndex - 1)]);
                        (onSelect) ? onSelect(data[(itemIndex - 1)]) : null;
                    }
                }}
            >
                <Picker.Item label={title} value="" />
                {data?.map((item: any , index:number) => {
                    return (
                        <Picker.Item key={index}
                        label={item.label} value={item.value} />
                    );
                })}
            </Picker>
        ) : (
            <AndroidSelectContainer>
                <ScrollView>
                    <AndroidSelectOptions selected={(selected?.value === "")}>
                        <BoldText color='rgba(0, 0, 0, 0.43)'>{title}</BoldText>
                    </AndroidSelectOptions>

                    {data?.map((item: ActionSheetDataOptions , index:number) => {
                        return (
                            <AndroidSelectOptions
                                key={index}
                                selected={(selected?.value === item.value)}
                                onPress={() => {
                                    setSelected(item);
                                    (onSelect) ? onSelect(item) : null;
                                }}>
                                <BoldText
                                    color={(selected?.value === item.value) ? colors.card : colors.primary}
                                >{item.label}</BoldText>
                            </AndroidSelectOptions>
                        );
                    })}
                </ScrollView>
            </AndroidSelectContainer>
        );
    };

    return (
        <View>
            <TouchableOpacity
                disabled={!editable}
                onPress={() => actionSheetRef.current?.setModalVisible(true)}
            >
                {renderPlaceholder}
            </TouchableOpacity>
            <ActionSheet ref={actionSheetRef} closeOnTouchBackdrop={true}>
                <DecisionBar>
                    <TitleBox>
                        <MediumText
                            color={colors.text}
                            fontSize={fontPixel(17)}
                            lineHeight={heightPixel(20)}
                        >{category}</MediumText>
                    </TitleBox>
                    <TouchableOpacity onPress={() => actionSheetRef.current?.setModalVisible(false)}>
                        <BoldText
                            fontSize={16}
                            lineHeight={heightPixel(20)}
                            color={colors.primary}
                        >Done</BoldText>
                    </TouchableOpacity>
                </DecisionBar>
                <SelectPlanRender>
                    {isLoading ? (
                        <LoadingContainer top={250}>
                            <ActivityIndicator size={'small'} color={colors.text} />
                        </LoadingContainer>
                    ) : renderPlans(options)}
                </SelectPlanRender>
            </ActionSheet>
        </View>

    );
}


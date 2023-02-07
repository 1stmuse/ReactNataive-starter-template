import styled from '@emotion/native';
import { useTheme } from '@emotion/react';
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { TextInput } from '../input';
import { fontPixel, heightPixel, widthPixel } from '../../utility/pxToDpConvert';
import { font } from '../../utility/fonts';
import { View } from 'react-native';

const DropdownInput = ({
    paddingLeft: widthPixel(17),
    paddingRight: widthPixel(29),
    paddingVertical: heightPixel(16),
    backgroundColor: 'transparent',
    borderRadius: 20,
    borderWidth: 1,
});

const DropdownInputTouched  = ({
    borderColor: "#6A2381"
})

const DropdownInputText = ({
    fontSize: fontPixel(20),
    fontFamily: font.semiBold,
})

const DropdownLabel =({
    fontFamily: font.regular,
})

export interface DropdownPickerItems {
    label: string,
    value: string
}

type ICustomDropdown = {
    placeholder?: string,
    containerStyle?: any,
    setValue: (value: any) => any,
    items: DropdownPickerItems[],
}

export const CustomDropdownPicker: React.FC<ICustomDropdown> = ({
    placeholder = "Select Option",
    containerStyle,
    setValue,
    items
}) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [open, setOpen] = useState(false);
    const [dropdownValue, setDropdownValue] = useState(null);
    const [dropdownItems, setDropdownItems] = useState(items);

    return (
        <View style={containerStyle}>
            <DropDownPicker
                labelStyle={DropdownLabel}
                textStyle={DropdownInputText}
                containerStyle={(open) ? DropdownInputTouched : undefined}
                style={DropdownInput}
                placeholder={placeholder}
                open={open}
                value={dropdownValue}
                items={dropdownItems}
                setOpen={setOpen}
                setValue={setDropdownValue}
                setItems={setDropdownItems}
                onChangeValue={(value) => {
        
                    setValue(value);
                }}
            />
        </View>
    );
}
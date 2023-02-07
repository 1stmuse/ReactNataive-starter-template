import styled from '@emotion/native';
import {useTheme} from '@emotion/react';
import React, {useState} from 'react';
import {fontPixel, heightPixel, widthPixel} from '../../utility/pxToDpConvert';
import Feather from 'react-native-vector-icons/Feather';
import {ITextInputWithLabel, InputWithLabel} from '../input';
import {MediumText} from '../text/text';
import {ActivityIndicator, ScrollView, ViewStyle} from 'react-native';

interface IDropdown extends ITextInputWithLabel {
  data: string[];
  value: string;
  setValue?: (label: string) => void;
  placeholder?: string;
  containerStyle?: ViewStyle;
  isLoading?: boolean;
  defaultValue?: string;
  label?: string;
}
export const Dropdown: React.FC<IDropdown> = ({
  data,
  value,
  setValue,
  isLoading,
  placeholder,
  containerStyle,
  defaultValue,
  label,
  ...rest
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const {colors} = useTheme();

  return (
    <InputGroup style={{position: 'relative', ...containerStyle}}>
      <InputWithLabel
        label={label}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        showSoftInputOnFocus={false}
        onTouchStart={() => setShowDropdown(true)}
        focusable={false}
        onFocus={() => setShowDropdown(true)}
        rightIcon={
          <Feather
            onPress={() => setShowDropdown(prev => !prev)}
            name={'chevron-down'}
            size={fontPixel(15)}
          />
        }
        {...rest}
      />

      {showDropdown && (
        <>
          {isLoading ? (
            <ActivityIndicator color={colors.black} size={'small'} />
          ) : (
            <DropdownMenu>
              <ScrollView>
                {data.map(label => (
                  <DropdownItem
                    key={Math.random()}
                    active={value}
                    currentItem={label}
                    onPress={() => {
                      setValue(label);
                      setShowDropdown(false);
                    }}>
                    <MediumText color={'#07070A'}>{label}</MediumText>
                  </DropdownItem>
                ))}
              </ScrollView>
            </DropdownMenu>
          )}
        </>
      )}
    </InputGroup>
  );
};

const DropdownItem = styled.TouchableOpacity<{
  active: string;
  currentItem: string;
}>(({active, currentItem}) => ({
  paddingHorizontal: widthPixel(12),
  paddingVertical: heightPixel(12),
  borderRadius: widthPixel(8),
  backgroundColor: active === currentItem ? '#E8E8E8' : '#FAFAFA',
}));

const InputGroup = styled.View({});
const DropdownMenu = styled.View(({theme: {colors}}) => ({
  backgroundColor: colors.white,
  paddingHorizontal: widthPixel(4),
  paddingVertical: heightPixel(8),
  borderRadius: widthPixel(8),
  elevation: 10,
  shadowColor: colors.border,
  shadowOffset: {
    width: 0,
    height: heightPixel(4),
  },
  shadowOpacity: 0.22,
  shadowRadius: widthPixel(2),
  left: 0,
  right: 0,
  position: 'absolute',
  maxHeight: heightPixel(300),
  marginTop: 60,
  zIndex: 999,
}));

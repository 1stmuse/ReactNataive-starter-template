/* eslint-disable prettier/prettier */
import React, { ReactElement } from "react";
import { TextStyle } from "react-native"
import { ActionSheetDataOptions, ActionSheetOptions } from "./selectOptions/actionSheetOptions";
import { SelectInputPlaceholder, SelectInputProps } from "./selectOptions/placeholders";

interface SelectWrapperBoxProp extends SelectInputProps {
  editable?: boolean;
  options: ActionSheetDataOptions[];
  onSelect?: (selected: ActionSheetDataOptions) => void;
  textStyle?: TextStyle,
  isLoading?: boolean
  placeHolderStyle?: TextStyle
  iconColor?: string
  rightIcon?: ReactElement
}

export const SelectWrapperBox: React.FC<SelectWrapperBoxProp> = ({
  editable,
  options,
  onSelect,
  textStyle,
  isLoading,
  placeHolderStyle,
  iconColor,
  rightIcon,
  ...rest
}) => {
  return (
    <ActionSheetOptions
      title={rest.title}
      options={options}
      editable={editable}
      renderPlaceholder={<SelectInputPlaceholder {...rest}  textStyle={textStyle} placeHolderStyle={placeHolderStyle} iconColor={iconColor} rightIcon={rightIcon} />}
      onSelect={onSelect}
      isLoading={isLoading}
    />
  );
};

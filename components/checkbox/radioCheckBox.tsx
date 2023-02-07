import { useTheme } from "@react-navigation/native";
import React from "react"
import { CheckBox, Icon } from "react-native-elements";

type RadioBoxProp = {
    checked?: boolean;
    setChecked?: () => void;
}
export const RadioCheckButton: React.FC<RadioBoxProp> = ({
    checked,
    setChecked
}) => {
    const { colors } = useTheme();

    return (
        <CheckBox
            center
            containerStyle={{ height: 'auto', padding: 0, margin: 0 }}
            checkedIcon={
                <Icon
                    name="radio-button-checked"
                    type="material"
                    color={colors.primary}
                    size={24}

                />
            }
            uncheckedIcon={
                <Icon
                    name="radio-button-unchecked"
                    type="material"
                    color="black"
                    size={24}
                />
            }
            checked={checked}
            onPress={setChecked}
        />
    )
}
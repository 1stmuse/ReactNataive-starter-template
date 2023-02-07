import React, { ReactNode } from "react";
import { Platform,  StatusBarStyle } from "react-native";
import { BaseViewContainer } from ".";
import FocusAwareStatusBar from "../statusbar";


export type BaseViewProps = {
    children?: ReactNode;
    focusBarStyle?: StatusBarStyle,
    backgroundColor?: string
}

export const BaseView: React.FC<BaseViewProps> = ({
    focusBarStyle,
    backgroundColor,
    children
}) => {
    // const height = useHeaderHeight();

    return (
        <BaseViewContainer
            contentContainerStyle={{ flex: 1 }}
            behavior={Platform.select({ ios: 'height', android: undefined })}
            keyboardVerticalOffset={Platform.select({
                ios: 0,
                // android: height + heightPixel(100)
            })}
            enabled={true}
            backgroundColor={backgroundColor}
        >
            <FocusAwareStatusBar
                backgroundColor={'transparent'}
                translucent={true}
                barStyle={focusBarStyle ?? 'dark-content'}
            />

            {children}
        </BaseViewContainer>
    )
}
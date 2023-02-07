/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
import styled from "@emotion/native";
import { ViewStyle, Platform } from "react-native";
import { heightPixel, widthPixel } from "../../utility/pxToDpConvert";

const os = Platform.OS


export const Spacer = styled.View<{ height?: number }>(({height}) => ({
    height: heightPixel(height ?? 20)
})); 

export const ViewContainer = styled.View({
    paddingHorizontal: widthPixel(20)
});

export const BottomViewContainer = styled(ViewContainer)({
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: heightPixel(40)
})

export const Divider = styled.View({
    height: 2,
    width: "100%",
    backgroundColor: "#cdd"
})

export const FlexedView = styled.View<ViewStyle>(({justifyContent}) => ({
    flexDirection:"row",
    alignItems:"center",
    justifyContent: justifyContent,
}))

export const Dot = styled.View<{width: number | string, height: string | number, backgroundColor?: string}>(({width = 20, height= 20, backgroundColor = "#000"}) => ({
    width,
    height,
    borderRadius: Number(height)/2,
    backgroundColor
}))

export const Circle = styled.View<{width: number, height: number, backgroundColor?: string}>(({width = 30, height=30, backgroundColor}) => ({
    justifyContent: "center",
    alignItems: "center",
    width,
    height,
    borderRadius: height/2,
    backgroundColor
}))

export const BaseViewContainer = styled.KeyboardAvoidingView<{
    backgroundColor?: string;
    paddingTop?: number
}>(({ backgroundColor = "#fff", paddingTop = os == "android" ? 10 : 50 }) => ({
    backgroundColor,
    flex: 1,
    paddingTop,
}));

export const CameraView = styled.View({
    minHeight: 200,
    borderWidth: 1,
    borderColor: "#fff"
})

export const Center = styled.View({
    justifyContent: "center",
    alignItems:"center"
  })
import React from "react"
import styled from "@emotion/native"
import * as Progress from 'react-native-progress';
import {} from "react-native"

const AbsView = styled.View({
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 10,
    flex: 1,
    justifyContent:"center",
    alignItems:"center"
})

export const Loader = () => {
    return (
        <AbsView>
            <Progress.Circle size={80} indeterminate={true} color="#fff" borderWidth={3}/>
        </AbsView>
    )
}
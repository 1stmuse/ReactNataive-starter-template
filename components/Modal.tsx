import React, { ReactElement } from "react"
import { Modal } from "react-native"
import { ViewContainer } from "./view";

interface IProps {
    component: ReactElement;
    show: boolean
}

export const AppModal: React.FC<IProps> = ({component:Component, show}) => {
    return <Modal visible={show} style={{flex: 1,}} transparent={true}  >
        <ViewContainer  style={{flex: 1, justifyContent:"center",backgroundColor: "rgba(0,0,0,0.5)"}}> 
        {Component}
        </ViewContainer>
    </Modal>
}
import React from "react";
import TextoCentral from "../components/TextoCentral";
import PassoStack from "../components/PassoStack";

export default props =>{
    //props.navigation.navigate("TelaB")
    return (
        <PassoStack {...props} avancar="TelaB">
            <TextoCentral corFundo = '#e53935'>
                Tela A
            </TextoCentral>
        </PassoStack>
    )
}
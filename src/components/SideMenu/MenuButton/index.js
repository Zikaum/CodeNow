import React, {useState} from "react";

import {
    StyleSheet,
    View,
    Text,
    TouchableWithoutFeedback,
} from 'react-native';

import FontAwesome from "@expo/vector-icons/FontAwesome";

import Color from "../../../color/color.js";

const MenuButton = (props) => {
    
    const [iconSelected, setIconSelected] = useState(false);
    let icons = ["folder", "folder-o"];
    
    let colors = [Color.PRIMARY_COLOR, Color.SECONDARY_COLOR];
    
    return(
        <View style={styles.button}>
            <TouchableWithoutFeedback
            style={styles.button}
            onPress={() => {
                props.onPress();
                setIconSelected(!iconSelected);
            }}>
                <FontAwesome name={icons[Number(iconSelected)]} size={30}/>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
});

export default MenuButton;
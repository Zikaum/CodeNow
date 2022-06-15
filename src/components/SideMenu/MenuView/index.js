import React, { Component, useEffect, useRef, useState} from "react";

import {
    Animated,
    Dimensions,
    StyleSheet,
    View,
    Text,
} from 'react-native';


import DirItem from "../../DirItem";

import Color from "../../../color/color.js";


const MenuView = (props) => {
    
    let menuW = Dimensions.get("window").width *.7;
    
    return(
        <Animated.View style={[
            styles.main,
            {
                width: menuW,
                left: props.position,
            }
        ]}>
            
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    main: {
        height: "100%",
        backgroundColor: Color.SECONDARY_COLOR,
        position: "absolute",
    },
});

export default MenuView;
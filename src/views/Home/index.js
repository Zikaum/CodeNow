import React, { Component, useState } from "react";

import {
    Dimensions,
    StyleSheet,
    StatusBar,
    Text,
    View,
    ScrollView,
    TextInput,
    Animated
} from 'react-native';

import Ionicons from "@expo/vector-icons/Ionicons";

import MenuButton from "../../components/SideMenu/MenuButton";
import MenuView from "../../components/SideMenu/MenuView";

import Color from "../../color/color.js";


const Home = () => {
    let menuW = Dimensions.get("window").width *.7;
    const [menuPosition, setMenuPosition] = useState(new Animated.Value(-menuW));
    
    const [target, setTarget] = useState(true);
    let targetValues = [-menuW, 0];
    let anim = Animated.timing(menuPosition, {
        toValue: targetValues[Number(target)],
        duration: 250,
        useNativeDriver: false,
    });
    
    return(
        <View style={styles.main}>
            <StatusBar style="auto"/>
            <View style={styles.header}>
                <View style={styles.menuButton}>
                    <MenuButton
                        onPress={() =>{
                            anim.start();
                            setTarget(!target);
                        }}
                    />
                </View>
                <View style={{width: "100%", backgroundColor: Color.PRIMARY_COLOR}}>
                    <View style={styles.infoView}>
                        <Text style={{fontSize: 14}}>Arquivo.extensão</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={styles.header2}>
                    <Text>Diretorio/do/arquivo</Text>
                </View>
                <ScrollView
                contentContainerStyle={{flexDirection: "row", height: "100%"}}
                >
                    <View style={{backgroundColor: "white", alignItems: "center", justifyContent: "center"}}>
                        <Text>1</Text>
                    </View>
                    <View style={{width: "100%", backgroundColor: "blue"}}>
                        <TextInput
                        multiline
                        style={{width: "100%", height: "100%"}}
                        />
                    </View>
                </ScrollView>
                <MenuView position={menuPosition}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: StatusBar.currentHeight
    },
    header: {
        height: 45,
        width: "100%",
        flexDirection: "row",
    },
    header2: {
        width: "100%",
        backgroundColor: Color.PRIMARY_COLOR
    },
    menuButton: {
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: 10,
        backgroundColor: Color.PRIMARY_COLOR
    },
    infoView: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        borderBottomLeftRadius: 10
    },
});

export default Home;
import React from "react";

import Octicons from "@expo/vector-icons/Octicons";


import {
    StyleSheet,
    View,
    Text,
} from 'react-native';


const DirItem = ({name}) => {
    return(
        <View style={styles.main}>
            <Octicons name="file-directory" size={25} />
            <Text>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flexDirection: "row",
        width: "100%",
        backgroundColor: "green"
    },
});

export default DirItem;
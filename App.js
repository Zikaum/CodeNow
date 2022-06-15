import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Home from "./src/views/Home";

const App = () => {
    return (
        <>
            <StatusBar style="auto" />
            <Home/>
        </>
    );
}


export default App;

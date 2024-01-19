/* eslint-disable prettier/prettier */
import React from 'react';
import {
    Text,
    SafeAreaView,
    DrawerLayoutAndroid,
} from 'react-native';
import HomeScreen from './app/components/Home';

export default function App() {
    return (
        <SafeAreaView>
            <HomeScreen />
        </SafeAreaView>
    )
}

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../RootScreen/HomeScreen';
import AnimalsPoetry from '../components/AnimalsPoetry';
import SongsPoetry from '../components/SongsPoetry';
import FlowersPoetry from '../components/FlowersPoetry';
import NaturePoetry from '../components/NaturePoetry';
import PlayPoetry from '../components/PlayPoetry';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen name="Homee" component={HomeScreen} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="Studio" component={HomeScreen} options={{
                headerShown: false,
            }} /> */}


            <Stack.Screen name="HomeMain" component={HomeScreen} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="AnimalsPoetry" component={AnimalsPoetry} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="SongsPoetry" component={SongsPoetry} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="FlowersPoetry" component={FlowersPoetry} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="NaturePoetry" component={NaturePoetry} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="PlayPoetry" component={PlayPoetry} options={{
                headerShown: false,
            }} />

        </Stack.Navigator>
    )
}

export default HomeStack

const styles = StyleSheet.create({})
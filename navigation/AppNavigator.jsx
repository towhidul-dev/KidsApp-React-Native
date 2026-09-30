import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import COLORS from '../colors';

import HomeScreen from '../RootScreen/HomeScreen';
import StudioScreen from '../RootScreen/StudioScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#1F2965',
                tabBarInactiveTintColor: '#9ab29e',
                tabBarStyle: {
                    backgroundColor: COLORS.orange,
                    borderTopWidth: 0,
                    borderRadius: 15,
                    borderTopRightRadius: 15,
                    height: 50,
                    marginBottom: 10,
                    width: '100%',
                }
            }}
        >

            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',

                    tabBarIcon: () => (
                        <Text style={{ fontSize: 20 }}>
                            🏠
                        </Text>
                    ),
                }}
            />

            <Tab.Screen
                name="Studio"
                component={StudioScreen}
                options={{
                    tabBarLabel: 'Studio',

                    tabBarIcon: () => (
                        <Text style={{ fontSize: 20 }}>
                            🏠
                        </Text>
                    ),
                }}
            />

        </Tab.Navigator>
    );
};

export default AppNavigator;
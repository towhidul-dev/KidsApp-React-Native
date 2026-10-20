import { Text, View, Image } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import COLORS from '../colors'

export class StudioScreen extends Component {
    render() {
        return (
            <SafeAreaProvider>
                <SafeAreaView style={styles.screen} edges={['top']}>

                    <View style={styles.poemCard}>
                        <View>
                            <Image
                                source={{ uri: 'https://i.pravatar.cc/100?img=13' }}
                                style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 8 }}
                            /></View>
                        <View>
                            <Text>আমাদের ছোট নদী</Text>
                            <Text>— রবীন্দ্রনাথ ঠাকুর</Text>
                        </View>
                    </View>

                    <View style={styles.poemCard}>
                        <View>
                            <Image
                                source={{ uri: 'https://i.pravatar.cc/100?img=13' }}
                                style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 8 }}
                            /></View>
                        <View>
                            <Text>আমাদের ছোট নদী</Text>
                            <Text>— রবীন্দ্রনাথ ঠাকুর</Text>
                        </View>
                    </View>

                </SafeAreaView>
            </SafeAreaProvider>
        )
    }
}

export default StudioScreen

const styles = {
    screen: {
        flex: 1, // fill the whole phone screen
        backgroundColor: COLORS.background,
    },
    poemCard: {
        backgroundColor: COLORS.orange,
        padding: 16,
        margin: 8,
        borderRadius: 12,
        flexDirection: 'row',
        gap: 30,
    },
}
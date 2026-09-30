/*
  HomeScreen.js
  -------------
  This file only PUTS THE PIECES TOGETHER.
  Every piece lives in its own file inside the "components" folder.

  Want to change how something looks? Open that component's file.
  Want to add a new section?
    1. Create a new file in "components", e.g. components/MyCard.js
    2. Import it below:   import MyCard from './components/MyCard'
    3. Put <MyCard /> where you want it on the screen.

  Needed package:  npx expo install react-native-safe-area-context
*/

import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import COLORS from './colors';

// Our pieces, one file each
import Header from './components/Header'
import GreetingCard from './components/GreetingCard'
import FeaturedRhyme from './components/FeaturedRhyme'
import Categories from './components/Categories'
import DailyChallenge from './components/DailyChallenge'
import PopularVideos from './components/PopularVideos'
import AudioPlayer from './components/AudioPlayer'
import BottomTabBar from './components/BottomTabBar'

function HomeScreen() {
    return (
        <SafeAreaProvider>
            {/* edges={['top']} = keep space for the phone's notch at the top */}
            <SafeAreaView style={styles.screen} edges={['top']}>

                {/* Everything in here scrolls up and down */}
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    <Header />
                    <GreetingCard />
                    <FeaturedRhyme />
                    <Categories />
                    <DailyChallenge />
                    <PopularVideos />
                    <AudioPlayer />
                </ScrollView>

                {/* Outside the ScrollView, so it always stays at the bottom */}
                <BottomTabBar />

            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1, // fill the whole phone screen
        backgroundColor: COLORS.background,
    },
    scrollContent: {
        paddingHorizontal: 16, // space on the left and right edges
        paddingBottom: 24,
    },
})

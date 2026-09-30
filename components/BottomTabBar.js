/*
  BottomTabBar.js
  ---------------
  The white menu fixed at the bottom of the screen.
  HomeScreen.js puts it OUTSIDE the ScrollView so it never scrolls away.
*/

import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from '../colors'

// "active: true" = the tab we are on right now.
const tabs = [
  { id: '1', label: 'মজার ছড়া',  icon: '📖', active: true },
  { id: '2', label: 'ছবি ও পড়া', icon: '📚', active: false },
  { id: '3', label: 'স্টুডিও',    icon: '🎤', active: false },
  { id: '4', label: 'পাঠশালা',   icon: '🧩', active: false },
]

function BottomTabBar() {
  return (
    // edges={['bottom']} keeps the bar above the phone's home bar
    <SafeAreaView edges={['bottom']} style={styles.bar}>
      {tabs.map((tab) => (
        <Pressable
          key={tab.id}
          // If the tab is active, add the "tabActive" style too
          style={tab.active ? [styles.tab, styles.tabActive] : styles.tab}
        >
          <Text style={styles.icon}>{tab.icon}</Text>
          <Text style={tab.active ? [styles.label, styles.labelActive] : styles.label}>
            {tab.label}
          </Text>
        </Pressable>
      ))}
    </SafeAreaView>
  )
}

export default BottomTabBar

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-around', // equal space around each tab
    backgroundColor: COLORS.white,
    paddingTop: 10,
    paddingHorizontal: 8,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: -2 }, // negative = shadow goes UP
    elevation: 8,
  },
  tab: {
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
    marginBottom: 8,
  },
  tabActive: {
    backgroundColor: COLORS.peach, // highlight the current tab
  },
  icon: {
    fontSize: 20,
  },
  label: {
    fontSize: 11,
    fontWeight: '600',
    color: COLORS.text,
    marginTop: 4,
  },
  labelActive: {
    color: COLORS.orange,
    fontWeight: '800',
  },
})

/*
  Categories.js
  -------------
  A title + a row of colored circles you can swipe left and right.
*/

import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import COLORS from '../colors'
import SectionHeader from './SectionHeader'

// The list of categories. To add one, just add a new line here.
// Every item needs a unique "id".
const categories = [
  { id: '1', label: 'পশুপাখি',      emoji: '🦜', color: '#6EE7B7' },
  { id: '2', label: 'গান ও সুর',     emoji: '🎵', color: '#CDE7FF' },
  { id: '3', label: 'ঘুমপাড়ানি',     emoji: '🌙', color: '#FDD9C6' },
  { id: '4', label: 'ঋতু ও প্রকৃতি', emoji: '🌧️', color: '#4FB3F6' },
  { id: '5', label: 'খেলাধুলা',      emoji: '⚽', color: '#FFC56B' },
]

function Categories() {
  return (
    <View>
      <SectionHeader icon="🔺" title="ছড়ার জগৎ" />

      {/* "horizontal" makes this ScrollView scroll left-right */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      >
        {/* .map() draws one circle for each item in the list.
            "key" must be unique — we use the id. */}
        {categories.map((category) => (
          <View key={category.id} style={styles.category}>
            <View style={[styles.circle, { backgroundColor: category.color }]}>
              <Text style={styles.emoji}>{category.emoji}</Text>
            </View>
            <Text style={styles.label}>{category.label}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  list: {
    gap: 14, // space between circles
    paddingRight: 16,
  },
  category: {
    width: 72,
    alignItems: 'center',
  },
  circle: {
    width: 68,
    height: 68,
    borderRadius: 34,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 30,
  },
  label: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.text,
    marginTop: 6,
    textAlign: 'center',
  },
})

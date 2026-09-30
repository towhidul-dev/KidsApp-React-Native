/*
  DailyChallenge.js
  -----------------
  The peach card with a trophy, a short message, 5 stars and a start button.
*/

import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import COLORS from '../colors'

// How many stars the child has earned (out of 5).
const EARNED_STARS = 3

function DailyChallenge() {
  return (
    <View style={styles.card}>

      {/* Trophy + titles */}
      <View style={styles.top}>
        <View style={styles.trophy}>
          <Text style={styles.trophyIcon}>🏆</Text>
        </View>
        <View style={styles.titles}>
          <Text style={styles.label}>আজকের পুরস্কার মিশন</Text>
          <Text style={styles.title}>দৈনিক তারকার চ্যালেঞ্জ</Text>
        </View>
      </View>

      <Text style={styles.message}>
        আজ যেকোনো ১টি ছড়া সুন্দর করে আবৃত্তি করলেই ঝুড়িতে জমা হবে ৫টি গোল্ডেন স্টার! ⭐
      </Text>

      {/* White bar: stars on the left, button on the right */}
      <View style={styles.bar}>
        <View style={styles.stars}>
          {[1, 2, 3, 4, 5].map((number) => {
            const isEarned = number <= EARNED_STARS
            return (
              <Text
                key={number}
                style={isEarned ? styles.star : [styles.star, styles.starFaded]}
              >
                🌟
              </Text>
            )
          })}
        </View>

        <Pressable style={styles.startButton}>
          <Text style={styles.startButtonText}>শুরু করো</Text>
        </Pressable>
      </View>

    </View>
  )
}

export default DailyChallenge

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.peach,
    borderRadius: 28,
    padding: 18,
    marginTop: 24,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trophy: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.orange,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  trophyIcon: {
    fontSize: 20,
  },
  titles: {
    flex: 1,
  },
  label: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.brown,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: COLORS.text,
    marginTop: 2,
  },
  message: {
    fontSize: 13,
    color: COLORS.mutedText,
    lineHeight: 21, // space between lines of text
    marginTop: 12,
  },
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    borderRadius: 999,
    padding: 8,
    paddingLeft: 14,
    marginTop: 14,
  },
  stars: {
    flexDirection: 'row',
    gap: 4,
  },
  star: {
    fontSize: 18,
  },
  starFaded: {
    opacity: 0.25, // 0 = invisible, 1 = fully visible
  },
  startButton: {
    backgroundColor: COLORS.green,
    borderRadius: 999,
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  startButtonText: {
    fontSize: 13,
    fontWeight: '800',
    color: COLORS.white,
  },
})

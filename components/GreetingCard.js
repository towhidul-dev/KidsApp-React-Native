/*
  GreetingCard.js
  ---------------
  The peach card that says hello to the child.
*/

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import COLORS from '../colors'

function GreetingCard() {
  return (
    <View style={styles.card}>

      {/* flex: 1 makes the text fill the card and pushes the button right */}
      <View style={styles.textBox}>
        <Text style={styles.title}>হ্যালো সোনামণি! ☀️</Text>
        <Text style={styles.subtitle}>আজ কোন ছড়াটি শুনবে ও গাইবে?</Text>
      </View>

      <View style={styles.button}>
        <Text style={styles.buttonText}>⭐ ১২০ স্টার</Text>
      </View>

    </View>
  )
}

export default GreetingCard

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.peach,
    borderRadius: 28,
    padding: 18,
    marginTop: 4,
  },
  textBox: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.text,
  },
  subtitle: {
    fontSize: 13,
    color: COLORS.mutedText,
    marginTop: 4,
  },
  button: {
    backgroundColor: COLORS.orange,
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 13,
    fontWeight: '800',
    color: COLORS.text,
  },
})

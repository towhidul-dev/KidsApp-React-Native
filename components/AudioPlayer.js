/*
  AudioPlayer.js
  --------------
  The light-blue music card: title, play button, sound wave, song name.
*/

import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import COLORS from '../colors'

// The colorful vertical lines in the sound wave.
// Each bar has a height (in points) and a color.
const waveBars = [
  { height: 14, color: '#1F5E7A' },
  { height: 26, color: '#F4A20C' },
  { height: 34, color: '#0B6B4A' },
  { height: 22, color: '#1F5E7A' },
  { height: 40, color: '#1F5E7A' },
  { height: 18, color: '#0B6B4A' },
  { height: 30, color: '#F4A20C' },
  { height: 14, color: '#1F5E7A' },
  { height: 36, color: '#0B6B4A' },
  { height: 20, color: '#F4A20C' },
  { height: 28, color: '#1F5E7A' },
  { height: 42, color: '#1F5E7A' },
]

function AudioPlayer() {
  return (
    <View style={styles.card}>

      {/* Disc icon + titles + play button */}
      <View style={styles.top}>
        <Text style={styles.disc}>💿</Text>
        <View style={styles.titles}>
          <Text style={styles.title}>ছড়া শুনো আর নাচ</Text>
          <Text style={styles.subtitle}>তালে তালে নেচে আনন্দ করো</Text>
        </View>
        <Pressable style={styles.playButton}>
          <Text style={styles.playIcon}>▶</Text>
        </Pressable>
      </View>

      {/* Sound wave. The bars have no id, so we use their position
          (index 0, 1, 2...) as the key. Fine for a list that never changes. */}
      <View style={styles.wave}>
        {waveBars.map((bar, index) => (
          <View
            key={index}
            style={[styles.bar, { height: bar.height, backgroundColor: bar.color }]}
          />
        ))}
      </View>

      {/* Song name + time */}
      <View style={styles.footer}>
        <Text style={styles.nowPlaying}>চলছে: তাই তাই তাই মামার বাড়ি যাই 🥁</Text>
        <Text style={styles.time}>০:৪২ / ১:৫০</Text>
      </View>

    </View>
  )
}

export default AudioPlayer

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.lightBlue,
    borderRadius: 28,
    padding: 18,
    marginTop: 16,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  disc: {
    fontSize: 26,
    marginRight: 10,
  },
  titles: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: COLORS.text,
  },
  subtitle: {
    fontSize: 12,
    color: COLORS.mutedText,
    marginTop: 2,
  },
  playButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.teal,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playIcon: {
    fontSize: 18,
    color: COLORS.white,
    marginLeft: 3,
  },
  wave: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // spread the bars evenly
    backgroundColor: COLORS.white,
    borderRadius: 20,
    height: 64,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  bar: {
    width: 6,
    borderRadius: 3,
    // height and color come from waveBars
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  nowPlaying: {
    flex: 1,
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.text,
  },
  time: {
    fontSize: 11,
    fontWeight: '600',
    color: COLORS.text,
  },
})

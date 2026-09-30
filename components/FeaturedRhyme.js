/*
  FeaturedRhyme.js
  ----------------
  The big card with a picture, two badges, the rhyme title,
  a "play" button and a heart button.
*/

import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import COLORS from '../colors'

function FeaturedRhyme() {
  return (
    <View style={styles.card}>

      {/* The picture, with two small labels ("badges") on top of it */}
      <View style={styles.imageBox}>
        <Image
          source={{ uri: 'https://picsum.photos/seed/meadow/800/500' }}
          style={styles.image}
        />

        {/* Top-left badge */}
        <View style={styles.badgeWhite}>
          <Text style={styles.badgeWhiteText}>✨ আজকের সেরা ছড়া</Text>
        </View>

        {/* Top-right badge */}
        <View style={styles.badgeGreen}>
          <Text style={styles.badgeGreenText}>🕒 ২ মিনিট</Text>
        </View>
      </View>

      {/* Text and buttons under the picture */}
      <View style={styles.body}>
        <Text style={styles.title}>হাট্টিমাটিম টিম</Text>

        {/* numberOfLines={1} = one line only, adds "..." if too long */}
        <Text style={styles.subtitle} numberOfLines={1}>
          তারা মাঠে পাড়ে ডিম, তাদের খাড়া দুটো শিং...
        </Text>

        <View style={styles.buttons}>
          <Pressable style={styles.playButton}>
            <Text style={styles.playButtonText}>▶  শুনো ও দেখো</Text>
          </Pressable>

          <Pressable style={styles.heartButton}>
            <Text style={styles.heartIcon}>♡</Text>
          </Pressable>
        </View>
      </View>

    </View>
  )
}

export default FeaturedRhyme

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.cream,
    borderRadius: 28,
    overflow: 'hidden', // cut the picture's corners so they are round too
    marginTop: 18,
    // Shadow for iPhone:
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    // Shadow for Android:
    elevation: 3,
  },
  imageBox: {
    height: 190,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  badgeWhite: {
    position: 'absolute', // float on top of the picture
    top: 12,
    left: 12,
    backgroundColor: COLORS.white,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  badgeWhiteText: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.text,
  },
  badgeGreen: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: COLORS.green,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  badgeGreenText: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.white,
  },
  body: {
    padding: 18,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: COLORS.text,
  },
  subtitle: {
    fontSize: 13,
    color: COLORS.mutedText,
    marginTop: 4,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    gap: 12, // space between the two buttons
  },
  playButton: {
    flex: 1, // stretches; the heart button stays small
    backgroundColor: COLORS.orange,
    borderRadius: 999,
    paddingVertical: 14,
    alignItems: 'center',
  },
  playButtonText: {
    fontSize: 15,
    fontWeight: '800',
    color: COLORS.text,
  },
  heartButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heartIcon: {
    fontSize: 24,
    color: COLORS.brown,
  },
})

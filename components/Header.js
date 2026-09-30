/*
  Header.js
  ---------
  The top row of the screen: logo, app name, star count, profile picture.
*/

import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import COLORS from '../colors'

function Header() {
  return (
    <View style={styles.header}>

      {/* Sun logo */}
      <View style={styles.logo}>
        <Text style={styles.logoEmoji}>🌞</Text>
      </View>

      {/* App name */}
      <View style={styles.headerText}>
        <Text style={styles.appName}>উৎসব ছোটদের</Text>
        <Text style={styles.appSubtitle}>Mojar Chhora</Text>
      </View>

      {/* Star count */}
      <View style={styles.starPill}>
        <Text style={styles.starPillText}>☆ ১২০</Text>
      </View>

      {/* Profile picture with an orange ring */}
      <View style={styles.avatarRing}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/100?img=13' }}
          style={styles.avatar}
        />
      </View>

    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row', // children side by side
    alignItems: 'center',
    paddingVertical: 12,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#FFE9A8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoEmoji: {
    fontSize: 22,
  },
  headerText: {
    flex: 1, // take the free space, pushes the pill and avatar to the right
    marginLeft: 10,
  },
  appName: {
    fontSize: 18,
    fontWeight: '800',
    color: COLORS.text,
  },
  appSubtitle: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.brown,
  },
  starPill: {
    backgroundColor: COLORS.peach,
    borderRadius: 999, // fully round ends
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
  },
  starPillText: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.text,
  },
  avatarRing: {
    width: 40,
    height: 40,
    borderRadius: 20, // half of width = circle
    borderWidth: 2,
    borderColor: COLORS.orange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
  },
})

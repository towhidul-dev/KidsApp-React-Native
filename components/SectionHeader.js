/*
  SectionHeader.js
  ----------------
  A title on the left and "সব দেখো" (see all) on the right.

  It is used by Categories.js and PopularVideos.js.
  You give it an icon and a title as "props", like this:

    <SectionHeader icon="🎬" title="জনপ্রিয় ভিডিও ছড়া" />
*/

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import COLORS from '../colors'

function SectionHeader({ icon, title }) {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{icon}  {title}</Text>
      <Text style={styles.seeAll}>সব দেখো</Text>
    </View>
  )
}

export default SectionHeader

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between', // title left, "see all" right
    alignItems: 'center',
    marginTop: 28,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: COLORS.text,
  },
  seeAll: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.green,
  },
})

/*
  VideoRow.js
  -----------
  ONE video card: picture on the left, text on the right.
  PopularVideos.js uses it once for every video, like this:

    <VideoRow video={video} />
*/

import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import COLORS from '../colors'

function VideoRow({ video }) {
  return (
    <Pressable style={styles.row}>

      {/* LEFT: picture with a round play button on top */}
      <View style={styles.thumbBox}>
        <Image source={{ uri: video.image }} style={styles.thumb} />

        {/* Two styles mixed: the normal one + a color from the data */}
        <View style={[styles.playButton, { backgroundColor: video.playColor }]}>
          <Text style={styles.playIcon}>▶</Text>
        </View>
      </View>

      {/* RIGHT: title, subtitle, rating and duration */}
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>{video.title}</Text>
        <Text style={styles.subtitle} numberOfLines={1}>{video.subtitle}</Text>

        <View style={styles.meta}>
          <Text style={styles.rating}>☆ {video.rating}</Text>
          <View style={styles.durationPill}>
            <Text style={styles.durationText}>{video.duration}</Text>
          </View>
        </View>
      </View>

    </Pressable>
  )
}

export default VideoRow

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  thumbBox: {
    width: 100,
    height: 76,
    borderRadius: 12,
    overflow: 'hidden',
    alignItems: 'center',     // center the play button...
    justifyContent: 'center', // ...in the middle of the picture
  },
  thumb: {
    // The picture covers the whole box, BEHIND the play button.
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  playButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playIcon: {
    fontSize: 12,
    color: COLORS.white,
    marginLeft: 2, // the ▶ symbol looks off-center, so nudge it right
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '800',
    color: COLORS.text,
  },
  subtitle: {
    fontSize: 12,
    color: COLORS.mutedText,
    marginTop: 2,
  },
  meta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  rating: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.text,
  },
  durationPill: {
    backgroundColor: COLORS.peach,
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  durationText: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.text,
  },
})

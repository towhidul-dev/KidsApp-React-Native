/*
  PopularVideos.js
  ----------------
  A title + a list of video cards.
  Each card is drawn by VideoRow.js.
*/

import React from 'react'
import { View } from 'react-native'
import SectionHeader from './SectionHeader'
import VideoRow from './VideoRow'

// The list of videos. Replace the image links with your own pictures.
const videos = [
  {
    id: '1',
    title: 'আতা গাছে তোতা পাখি',
    subtitle: 'ডালিম গাছে মৌ...',
    rating: '৫.০ (৩.২k)',
    duration: '১:৪৫ মি.',
    playColor: '#F4A20C', // color of the round ▶ button
    image: 'https://picsum.photos/seed/parrot/300/200',
  },
  {
    id: '2',
    title: 'বাকবাকুম পায়রা',
    subtitle: 'মাথায় দিয়ে টায়রা...',
    rating: '৪.৯ (২.৮k)',
    duration: '২:১০ মি.',
    playColor: '#4ADE9B',
    image: 'https://picsum.photos/seed/pigeon/300/200',
  },
  {
    id: '3',
    title: 'খোকা গেছে মাছ ধরতে',
    subtitle: 'ক্ষীর নদীর কূলে...',
    rating: '৪.৮ (৪.৬k)',
    duration: '১:৩০ মি.',
    playColor: '#38A5F0',
    image: 'https://picsum.photos/seed/river/300/200',
  },
]

function PopularVideos() {
  return (
    <View>
      <SectionHeader icon="🎬" title="জনপ্রিয় ভিডিও ছড়া" />

      {/* One VideoRow for each video in the list */}
      {videos.map((video) => (
        <VideoRow key={video.id} video={video} />
      ))}
    </View>
  )
}

export default PopularVideos

/*
  colors.js
  ---------
  All the colors of the app live here, in ONE place.
  Every component imports this file like this:

    import COLORS from '../colors'

  and then uses a color like this:  COLORS.orange
  Change a color here and it changes everywhere.
*/

const COLORS = {
    background: '#FFF8F3', // very light cream — the whole screen
    white: '#FFFFFF',
    peach: '#FDE3D6', // soft pink-orange cards
    cream: '#FFE4C4', // featured card
    orange: '#F4A20C', // main buttons
    green: '#0B6B4A', // "see all" links, start button
    brown: '#8A4B00', // small labels
    text: '#2A1A0E', // almost black — main text
    mutedText: '#6E5A4B', // greyish brown — less important text
    lightBlue: '#CFE6F8', // audio card
    teal: '#1F5E7A', // audio play button
}

export default COLORS
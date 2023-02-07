export const formatLyric = lyric => String(lyric).trim()
  .replace(/\n{3,}\s*/g, '\n')
  .replace(/\t{2,}\s*/g, '\t')


export const MAP_UP_CHORDS = {
  'A': 'A#',
  'A#': 'B',
  'B': 'C',
  'C': 'C#',
  'C#': 'D',
  'D': 'D#',
  'D#': 'E',
  'E': 'F',
  'F': 'F#',
  'F#': 'G',
  'G': 'G#',
  'G#': 'A',
}
export const MAP_DOWN_CHORDS = Object.keys(MAP_UP_CHORDS).reduce((resultObj, key) => {
  resultObj[MAP_UP_CHORDS[key]] = key
  return resultObj
}, {})

export const chordsRegex = /\[(.*?)\]/g

export const getNewChord = (isUp, chordStr) => {
  const firstLetter = chordStr[0]
  if (!firstLetter) {
    return chordStr
  }
  const MAP_CHORDS = (isUp ? MAP_UP_CHORDS : MAP_DOWN_CHORDS)
  const secondLetter = chordStr[1]
  if (secondLetter === '#') {
    const replaceStr = MAP_CHORDS[firstLetter + secondLetter] || firstLetter
    return replaceStr + chordStr.slice(2, chordStr.length);
  }
  const newFirstLetter = MAP_CHORDS[firstLetter] || firstLetter
  return newFirstLetter + chordStr.slice(1, chordStr.length);
}

export const changeTone = (isUp, lyrics) => {
  if (!lyrics) {
    return lyrics
  }
  const allChords = [...new Set(lyrics.match(chordsRegex))].map(item => item.replace(/([\[\]])/g, ''))
  for (const chordStr of allChords) {
    let firstLetter = chordStr[0]
    if (firstLetter) {
      firstLetter = String(firstLetter).toUpperCase()
      const newChord = getNewChord(isUp, chordStr)
      lyrics = lyrics.replace(new RegExp(`\\[${chordStr}\\]`, 'g'), `[${newChord}]`)
    }
  }
  return lyrics
}
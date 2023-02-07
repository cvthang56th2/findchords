<script setup>
import { formatLyric } from '~/utils/song'
const props = defineProps({
  lyrics: String,
  fontSize: {
    type: String,
    default: '16px'
  },
  rowClass: {
    type: String,
    required: false
  },
  wrapClass: {
    type: String,
    required: false
  }
})
const generateRows = (text) => {
  const rows = text.split('\n')
  return rows.reduce((resultArr, row) => {
    if (row) {
      resultArr.push(`<div class="mb-3 last:mb-0 ${props.rowClass || ''}">${row.replace(chordsRegex, '<span class="text-red-500 hover:underline cursor-pointer chord ">[$1]</span>')}</div>`)
    }
    return resultArr
  }, []).join('')
}
const generateLyricHTML= (text = '') => {
  let result = ''
  text = formatLyric(text)
  const splitDescription = text.split('=')
  if (splitDescription.length > 1) {
    result = `<div class="${props.rowClass || ''} description mb-5 border-2 border-dashed rounded-md bg-yellow-200 py-4 px-2">${generateRows(splitDescription[0])}</div>`
    splitDescription.splice(0, 1)
  }
  result += generateRows(splitDescription.join('\n'))
  return result
}
const lyricsHTML = computed(() => generateLyricHTML(props.lyrics))
</script>
<template>
  <div :class="wrapClass" v-html="lyricsHTML" :style="`font-size: ${fontSize};`"></div>
</template>
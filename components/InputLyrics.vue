<script setup>
const { $swal } = useNuxtApp()

const props = defineProps({
  id: String,
  modelValue: String
})

const lyrics = ref('')

watch(() => props.modelValue, v => {
  lyrics.value = v
})

const emits = defineEmits(["update:modelValue"])

const edmitData = () => {
  emits('update:modelValue', lyrics.value)
}

const format = () => {
  if (!lyrics.value) {
    return
  }
  lyrics.value = formatLyric(lyrics.value)
  edmitData()
}
const mergeRows = () => {
  if (!lyrics.value) {
    return
  }
  lyrics.value = lyrics.value.replace(/\n{2,}\s*/g, '\n');
  edmitData()
}
const changeLyricTone = (isUp) => {
  lyrics.value = changeTone(isUp, lyrics.value)
  edmitData()
}
const clearChords = () => {
  if (!lyrics.value) {
    return
  }
  $swal.fire({
    title: 'Do you want to do this action?',
    showCancelButton: true,
    confirmButtonText: 'Save'
  }).then((result) => {
    if (result.isConfirmed) {
      lyrics.value = String(lyrics.value || '').replace(chordsRegex, '')
      edmitData()
    }
  })
}
</script>
<template>
  <div>
    <div class="flex items-center justify-between my-3">
      <div class="flex flex-wrap items-center">
        <button class="px-3 py-1 rounded-md border-2" @click="format">Định dạng</button>
        <button class="px-3 py-1 rounded-md border-2 ml-3" @click="mergeRows">Nhập dòng</button>
        <button class="px-3 py-1 rounded-md border-2 ml-3" @click="changeLyricTone(true)">Nâng tone</button>
        <button class="px-3 py-1 rounded-md border-2 ml-3" @click="changeLyricTone(false)">Hạ tone</button>
        <button class="px-3 py-1 rounded-md border-2 ml-3" @click="clearChords">Xoá hợp âm</button>
        <!-- <div class="flex items-center cursor-pointer ml-3">
          <label class="font-semibold text-sm" for="auto-symbol" class="mr-1">Tự động thêm ngoặc vuông [ ]</label>
          <input v-model="autoSymbol" id="auto-symbol" type="checkbox">
        </div> -->
      </div>
      <!-- <div class="flex items-center ml-3">
        <button class="px-3 py-1 rounded-md border-2">Xem trước</button>
      </div> -->
    </div>
    <textarea :id="id || 'song-lyrics'" v-model="lyrics" class="border-2 px-3 py-1 w-full rounded-md h-[500px] max-h-[500px]" @input="edmitData">
    </textarea>
  </div>
</template>
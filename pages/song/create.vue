<script setup>
const formData = ref({})
</script>
<template>
  <div class="container py-5">
    <h1>Đăng bài hát mới</h1>
    <div class="flex flex-wrap">
      <div class="w-full lg:w-3/4">
        <div>
          <div>
            <label class="font-semibold text-sm" for="song-name">Tên bài hát:</label>
          </div>
          <input id="song-name" v-model="formData.song" type="text" class="border-2 px-3 py-1 w-full rounded-md">
        </div>
        <div class="mt-3">
          <div>
            <label class="font-semibold text-sm" for="song-lyrics">Lời bài hát và hợp âm:</label>
          </div>
          <InputLyrics v-model="formData.lyrics" id="" />
        </div>
        <div class="mt-3 p-4 pb-8 border-2 border-dashed rounded-md">
          <h4 class="text-center mb-5">Preview</h4>
          <ViewLyrics :lyrics="formData.lyrics" />
        </div>
        <div class="mt-3 flex -mx-3">
          <div class="w-full lg:w-1/2 px-3">
            <div>
              <label class="font-semibold text-sm" for="song-author">Tác giả:</label>
            </div>
            <input id="song-author" v-model="formData.author" type="text" class="border-2 px-3 py-1 w-full rounded-md">
          </div>
          <div class="w-full lg:w-1/2 px-3">
            <div>
              <label class="font-semibold text-sm" for="song-genre">Thể loại:</label>
            </div>
            <input id="song-genre" v-model="formData.genre" type="text" class="border-2 px-3 py-1 w-full rounded-md">
          </div>
        </div>
        <div class="mt-3 flex -mx-3">
          <div class="w-full lg:w-2/5 px-3">
            <div>
              <label class="font-semibold text-sm" for="song-author">Ca sĩ:</label>
            </div>
            <input id="song-author" v-model="formData.author" type="text" class="border-2 px-3 py-1 w-full rounded-md">
          </div>
          <div class="w-full lg:w-1/5 px-3">
            <div>
              <label class="font-semibold text-sm" for="song-tone">Tông:</label>
            </div>
            <input id="song-tone" v-model="formData.tone" type="text" class="border-2 px-3 py-1 w-full rounded-md">
          </div>
          <div class="w-full lg:w-2/5 px-3">
            <div>
              <label class="font-semibold text-sm" for="song-link">Link nhạc:</label>
            </div>
            <input id="song-link" v-model="formData.link" type="text" class="border-2 px-3 py-1 w-full rounded-md">
          </div>
        </div>
        <div class="flex justify-center mt-3">
          <el-button type="primary" class="mb-2 lg:mb-0">Đăng bài mới</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
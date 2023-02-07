<script setup>
const isShowPopupAuth = ref(false)
</script>
<template>
  <header class="py-1 border-b-2">
    <div class="container">
      <div class="flex flex-wrap items-center">
        <div class="w-full md:w-auto">
          <nuxt-link to="/">
            <img src="https://via.placeholder.com/140x70" alt="logo" class="mx-auto md:mx-0 mb-3 md:mb-0">
          </nuxt-link>
        </div>
    
        <div class="w-full md:w-auto lg:ml-4 flex justify-center md:justify-end flex-1 flex-wrap">
          <nuxt-link to="/song/create" class="mb-2 lg:mb-0 mr-2"><el-button type="primary">Đăng bài hát</el-button></nuxt-link>
          <el-button type="primary" class="mb-2 lg:mb-0" @click="isShowPopupAuth = true">Đăng nhập</el-button>
        </div>
      </div>
      <ul class="flex flex-wrap items-center list-none mt-2">
        <li class="mr-2 last:mr-0 mb-0">
          <nuxt-link to="/">Bài hát</nuxt-link>
        </li>
        <li class="mr-2 last:mr-0 mb-0">
          <nuxt-link to="/chord">Hợp âm</nuxt-link>
        </li>
        <li class="mr-2 last:mr-0 mb-0">
          <nuxt-link to="/rythm">Điệu bài hát</nuxt-link>
        </li>
        <li class="mr-2 last:mr-0 mb-0">
          <nuxt-link to="/genre">Thể loại</nuxt-link>
        </li>
        <li class="mr-2 last:mr-0 mb-0">
          <nuxt-link to="/member">Thành viên</nuxt-link>
        </li>
      </ul>
    </div>
    <dialog-auth v-model="isShowPopupAuth" />
  </header>
</template>
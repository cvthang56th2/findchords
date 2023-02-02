<template>
  <div class="bg-gray-200">
    <div class="container">
      <div class="px-7 py-5">
        <h1>Bài hát: {{ $route.params.id }}</h1>
        <div class="flex flex-wrap">
          <el-button type="primary" class="mr-2 mb-1">C (tone gốc)</el-button>
          <div class="rounded-md bg-gray-100 py-1 px-3 flex mr-2 mb-1">
            <span>Singer</span>
            <span>Youtube</span>
          </div>
          <el-button type="secondary mb-1">Điệu bài hát</el-button>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="px-7 py-2 flex justify-between flex-wrap">
      <div class="flex items-center">
        <span class="text-link cursor-pointer mr-2">Chọn phiên bản</span>
        /
        <div class="flex items-center ml-2">
          <div class="w-[20px] h-[20px] bg-center bg-no-repeat bg-cover rounded-sm" style="background-image: url(https://via.placeholder.com/100)"></div>
          <span class="ml-1">User name</span>
        </div>
      </div>
      <div class="flex items-center">
        <span>stars</span>
        <div class="flex items-center ml-2">
          <div class="w-[40px] h-[40px] bg-center bg-no-repeat bg-cover rounded-sm" style="background-image: url(https://via.placeholder.com/100)"></div>
          <div class="ml-1">
            <div>User name</div>
            <div>Statictics</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="flex flex-wrap">
      <div class="flex mr-4 mb-1">
        <button class="border-2 border-r-0 px-4 py-1">-</button>
        <span class="border-2 px-4 py-1">C</span>
        <button class="border-2 border-l-0 px-4 py-1">+</button>
      </div>
      <div class="flex mr-4 mb-1">
        <button class="border-2 border-r-0 px-4 py-1">&lt;</button>
        <span class="border-2 px-4 py-1">15pt</span>
        <button class="border-2 border-l-0 px-4 py-1">&gt;</button>
      </div>
      <div class="flex mr-4 mb-1">
        <span class="border-2 border-r-0 px-4 py-1">Gộp dòng</span>
        <span class="border-2 px-4 py-1"><input type="checkbox" name="" id=""></span>
      </div>
      <div class="flex mr-4 mb-1">
        <span class="border-2 border-r-0 px-4 py-1">Cuộn trang</span>
        <span class="border-2 px-4 py-1">0</span>
      </div>
      <div class="flex mr-4 mb-1">
        <span class="border-2 border-r-0 px-4 py-1">Chia cột</span>
        <span class="border-2 px-4 py-1"><input type="checkbox" name="" id=""></span>
      </div>
      <div class="flex mr-4 mb-1">
        <span class="border-2 border-r-0 px-4 py-1">Hợp âm dễ</span>
        <span class="border-2 px-4 py-1"><input type="checkbox" name="" id=""></span>
      </div>
    </div>
    <div class="py-4">
      <div class="flex flex-wrap -mx-2 flex-col max-h-[80vh]">
        <div class="w-full lg:w-1/2 px-2 border-dashed border-2 p-3 bg-yellow-200">
          Description
        </div>
        <div v-for="i in new Array(15)" class="w-full lg:w-1/2 px-2 mb-2 last:mb-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptatem aperiam inventore saepe animi. Nihil quasi quod placeat voluptates veniam maxime ducimus porro dolores facilis. Ducimus ullam atque nesciunt velit?
        </div>
      </div>
    </div>
  </div>
</template>
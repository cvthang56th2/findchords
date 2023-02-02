<script setup>
const rythms = ref([
  {
    name: 'Name',
    count: 1
  },
  {
    name: 'Name',
    count: 2
  },
  {
    name: 'Name',
    count: 3
  },
])
</script>
<template>
  <div class="container py-4">
    <div class="flex flex-wrap lg:-mx-2">
      <div class="w-full lg:px-2 lg:w-3/12">
        <div>
          <h6 class="text-center uppercase">Thông tin cá nhân</h6>
          <div class="rounded-md shadow-md border-2 flex p-2">
            <div class="w-[50px] h-[50px] bg-center bg-no-repeat bg-cover rounded-md" style="background-image: url(https://via.placeholder.com/100)">
            </div>
            <div class="ml-2 flex-1">
              <div class="font-semibold">Name</div>
              <div>Statistics</div>
            </div>
          </div>
        </div>
        <div class="text-center">
          <el-button class="mt-3" type="primary">Đăng bài hát</el-button>
        </div>
        <div class="mt-4">
          <h6 class="text-center uppercase">Điệu bài hát</h6>
          <div class="rounded-md shadow-md border-2 flex flex-wrap p-2">
            <nuxt-link to="/" v-for="rythmObj in rythms" class="ml-2 rounded-sm bg-green-200 px-2 mb-1">
              {{ rythmObj.name }} ({{ rythmObj.count || 0 }} bài)
            </nuxt-link>
          </div>
        </div>
        <div class="mt-4">
          <h6 class="text-center uppercase">Chờ xét duyệt</h6>
          <div class="rounded-md shadow-md border-2 p-2">
            <nuxt-link to="/" v-for="i in [1,2,3,4]">
              <div class="py-1 border-b-2 mb-1 last:mb-0 truncate">
                <div>Name {{ i }}</div>
                <div>User, {{ new Date() }}</div>
              </div>
            </nuxt-link>
          </div>
          <div class="text-center mt-1">
            <nuxt-link to="/" class="text-link">Xem tất cả</nuxt-link>
          </div>
        </div>
        <div class="mt-4">
          <h6 class="text-center uppercase">Yêu cầu mới</h6>
          <div class="rounded-md shadow-md border-2 p-2">
            <nuxt-link to="/" v-for="i in [1,2,3,4]">
              <div class="py-1 border-b-2 mb-1 last:mb-0 truncate">
                <div>Name {{ i }}</div>
                <div>User, {{ new Date() }}</div>
              </div>
            </nuxt-link>
          </div>
          <div class="text-center mt-1">
            <nuxt-link to="/" class="text-link">Xem tất cả</nuxt-link>
          </div>
        </div>
        <div class="mt-4">
          <h6 class="text-center uppercase">Playlist Ngẫu nhiên</h6>
          <div class="rounded-md shadow-md border-2 p-2">
            <nuxt-link to="/" v-for="i in [1,2,3,4]">
              <div class="flex items-center py-1 border-b-2 mb-1 last:mb-0">
                <div class="w-[50px] h-[50px] bg-center bg-no-repeat bg-cover rounded-md" style="background-image: url(https://via.placeholder.com/100)"></div>
                <div class="ml-2 flex-1 truncate">
                  <div>Name {{ i }}</div>
                  <div>
                    User, {{ new Date() }}
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="text-center mt-1">
            <nuxt-link to="/" class="text-link">Xem tất cả</nuxt-link>
          </div>
        </div>
        <div class="mt-4">
          <div class="flex flex-wrap rounded-md bg-gray-200 p-2">
            <nuxt-link to="/" v-for="i in [1,2,3,4]" class="px-2 border-r-2 border-blue-500 hover:underline last:border-r-0 mr-2 last:mr-0">
              Link {{ i }}
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="mt-4 lg:px-2 lg:mt-0 w-full lg:w-6/12">
        <div>
          <h6 class="text-center uppercase">Hot nhất hôm nay</h6>
          <div class="rounded-md shadow-md border-2 p-2">
            <div v-for="(item, i) in new Array(50)" class="flex justify-between mb-2 last:mb-0">
              <div class="truncate flex">
                <span class="mr-1">
                  icon
                </span>
                <nuxt-link :to="`/song/${i}`" class="font-semibold hover:underline mr-2">{{ i + 1 }}. Name {{  i + 1 }}</nuxt-link>
                <span class="mr-2">Singer</span>
              </div>
              <div>
                Comments Count
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <h6 class="text-center uppercase">Hot trong tuần</h6>
          <div v-for="(item, i) in new Array(50)" class="rounded-md shadow-md border-2 p-2 mb-2 last:mb-0">
            {{ i }}
          </div>
        </div>
      </div>
      <div class="mt-4 lg:px-2 lg:mt-0 w-full lg:w-3/12">
        <div>
          <h6 class="text-center uppercase">Mới nổi</h6>
          <div class="rounded-md shadow-md border-2 p-2">
            <div v-for="(item, i) in new Array(10)" class="flex truncate mb-2 last:mb-0">
              <span class="mr-1">
                icon
              </span>
              <nuxt-link :to="`/song/${i}`" class="font-semibold hover:underline mr-2">{{ i + 1 }}. Name {{  i + 1 }}</nuxt-link>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <h6 class="text-center uppercase">Hợp âm mới</h6>
          <div class="rounded-md shadow-md border-2 p-2">
            <nuxt-link :to="`/song/${i}`" v-for="i in [1,2,3,4]">
              <div class="py-1 border-b-2 mb-1 last:mb-0 truncate">
                <div>Name {{ i }}</div>
                <div>User, {{ new Date() }}</div>
              </div>
            </nuxt-link>
          </div>
          <div class="flex justify-center mt-2">
            pagination
          </div>
        </div>
        <div class="mt-4">
          <h6 class="text-center uppercase">Bình luận mới</h6>
          <div class="rounded-md shadow-md border-2 p-2">
            <nuxt-link to="/" v-for="i in [1,2,3,4]">
              <div class="py-1 border-b-2 mb-1 last:mb-0 truncate">
                <div class="flex justify-between">
                  <div class="w-1/2 truncate">Name {{ i }}</div>
                  <div class="w-1/2 truncate">{{ new Date() }}</div>
                </div>
                <div class="flex items-center">
                  <div class="w-[20px] h-[20px] bg-center bg-no-repeat bg-cover rounded-sm" style="background-image: url(https://via.placeholder.com/100)"></div>
                  <span class="ml-1">User name</span>
                </div>
                <div class="truncate">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quasi, voluptates dolor nesciunt a nihil ipsa unde est veritatis ab. Illo pariatur ipsum perferendis et dolorum sequi esse ullam tenetur?
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
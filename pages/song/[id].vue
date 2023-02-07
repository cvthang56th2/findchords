<script setup>
const lyrics = ref(`lorr [C]
=
Capo 3
=
CCC Người [Hhh] [G#] [Aaaaaa] [C] [D]đón em đến bên đời là điều tuyệt [Em]nhất để khiến em cười
Người [Am]cứ như ô che [G]mưa, như mây bay [F]qua cho ngày trong [Fm]xanh.
[C]Ở đây có anh này em thật nhỏ [Em]bé trong chiếc ôm này
[Am]Ấm hơn chăn mà, còn [G]thơm hơn hoa mà [F]sao em nỡ rời [Fm]xa. [F] [G]
Rồi ta sẽ [C]ngắm pháo hoa cùng nhau trên tầng thượng [Em]phía bên kia dòng sông
Vạn lời [Am]chúc ấm êm cho [G]nhau là sẽ thành [F]đôi sau vài cái [Fm]xuân
Mong trời [C]sẽ thương em thương anh và cho đôi mình [Em]mãi bên nhau dài lâu
Cho dù [Am]thế gian kia cuồng [G]quay trăm bộn bề [F]ta vẫn không cách [C]rời.
VERSE 2
[C]Thấy anh đứng đây rồi, mắt cười cong [Em]khoé mi hý đây rồi
Càng [Am]đắm say thế nên [G]em lại sợ một [F]mai mình rời xa [Fm]nhau.
Anh [C]thơm vào má em này cho chừa cái [Em]thói nói vớ vẩn này
Mặt [Am]ngây ngô ra rồi còn [G]anh thì đứng cười [F]đây có phải là điều tuyệt [Fm]nhất.
Rồi ta sẽ [C]ngắm pháo hoa cùng nhau trên tầng thượng [Em]phía bên kia dòng sông
Vạn lời [Am]chúc ấm êm cho [G]nhau là sẽ thành [F]đôi sau vài cái [Fm]xuân
Mong trời [C]sẽ thương em thương anh và cho đôi mình [Em]mãi bên nhau dài lâu
Cho dù [Am]thế gian kia cuồng [G]quay trăm bộn bề [F]ta vẫn không cách [C]rời. [C7]
BRIDGE
Dù [F]mai mặt trời không [Em]chiếu sáng trên hành [Am]tinh này
Thì [Dm]em [G]vẫn sẽ tìm [C]anh bằng [C7]trái tim này
Dù [F]mai đời, người dẫu [Em]có cách ngăn tình [Am]ta
Thì [Dm]em xin một lần không tên, nguyện [G]yêu anh một đời an yên.
Rồi ta sẽ [C]ngắm pháo hoa cùng nhau trên tầng thượng [Em]phía bên kia dòng sông
Vạn lời [Am]chúc ấm êm cho [G]nhau là sẽ thành [F]đôi sau vài cái [Fm]xuân
Mong trời [C]sẽ thương em thương anh và cho đôi mình [Em]mãi bên nhau dài lâu
Cho dù [Am]thế gian kia cuồng [G]quay trăm bộn bề [F]ta vẫn không cách [C]rời`)

const changeLyricTone = (isUp) => {
  lyrics.value = changeTone(isUp, lyrics.value)
  currentTone.value = getNewChord(isUp, currentTone.value)
}
const currentTone = ref('C')
const viewOptions = ref({
  fontSize: 16,
  splitColumns: false,
  scrollSpeed: 0
})
const changeFontSize = isUp => {
  if (isUp && viewOptions.value.fontSize < 24) {
    viewOptions.value.fontSize++
    return
  }
  if (!isUp && viewOptions.value.fontSize > 10) {
    viewOptions.value.fontSize--
    return
  }
}
let scrollInterval = null
const setAutoScroll = () => {
  const main = document.querySelector('main')
  clearInterval(scrollInterval)
  scrollInterval = setInterval(() => {
    main.scrollTo({ top: main.scrollTop + (1 * viewOptions.value.scrollSpeed * 0.5), behavior: 'smooth' })
  }, 50);
}
const changeScrollSpeed = (index) => {
  viewOptions.value.scrollSpeed = index
  clearInterval(scrollInterval)
  const header = document.querySelector('header')
  if (index > 0) {
    setAutoScroll()
    header.style.display = 'none'
  } else {
    header.style.display = ''
  }
}
</script>
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
  <div :class="viewOptions.scrollSpeed > 0 ? 'fixed top-0 w-screen bg-white' : ''">
    <div class="container">
      <div class="flex flex-wrap">
        <div class="flex mr-4 mb-1">
          <button class="border-2 border-r-0 px-4 py-1" @click="changeLyricTone(false)">-</button>
          <span class="border-2 px-4 py-1">{{ currentTone }}</span>
          <button class="border-2 border-l-0 px-4 py-1" @click="changeLyricTone(true)">+</button>
        </div>
        <div class="flex mr-4 mb-1">
          <button class="border-2 border-r-0 px-4 py-1" @click="changeFontSize(false)">&lt;</button>
          <span class="border-2 px-4 py-1">{{ viewOptions.fontSize }}px</span>
          <button class="border-2 border-l-0 px-4 py-1" @click="changeFontSize(true)">&gt;</button>
        </div>
        <div class="flex mr-4 mb-1">
          <span class="border-2 border-r-0 px-4 py-1">Chia cột</span>
          <span class="border-2 px-4 py-1"><input v-model="viewOptions.splitColumns" type="checkbox" name="" id=""></span>
        </div>
        <div class="flex mr-4 mb-1">
          <span class="border-2 border-r-0 px-4 py-1">Cuộn trang</span>
  
          <el-dropdown class="flex items-center justify-center" trigger="click">
            <span class="border-2 px-4 py-2">
              {{ viewOptions.scrollSpeed }}
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item v-for="(i, index) in new Array(11)" :class="viewOptions.scrollSpeed === index ? 'bg-green-200 text-white' : ''" @click="changeScrollSpeed(index)">
                  {{ index }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <!-- <div class="flex mr-4 mb-1">
          <span class="border-2 border-r-0 px-4 py-1">Hợp âm dễ</span>
          <span class="border-2 px-4 py-1"><input type="checkbox" name="" id=""></span>
        </div> -->
      </div>
    </div>
  </div>
  <div class="container">
    <div class="py-4">
      <view-lyrics
        :lyrics="lyrics"
        row-class="w-full lg:w-1/2 px-5"
        :wrapClass="[
          'flex flex-wrap -mx-5 flex-col px-7 py-5',
          (viewOptions.splitColumns || viewOptions.scrollSpeed > 0) ? '' : 'max-h-[80vh]'
        ].join(' ')"
        :font-size="`${viewOptions.fontSize}px`"
      />
    </div>
  </div>
</template>
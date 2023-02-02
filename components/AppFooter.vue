<template>
  <footer class="border-t-2 py-2">
    <div class="container text-center">
      <h2 class="text-lg mb-1">Find Chords</h2>
      <div class="flex flex-wrap justify-center rounded-md">
        <nuxt-link to="/" v-for="i in [1,2,3,4]" class="px-2 border-r-2 border-blue-500 hover:underline last:border-r-0 mr-2 last:mr-0">
          Link {{ i }}
        </nuxt-link>
      </div>
    </div>
  </footer>
</template>
<template>
  <div class="flex flex-col h-screen">
    <AppHeader />
    <main class="flex-1 overflow-y-auto">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
<style>
.swal2-container {
  z-index: 9999;
}
</style>
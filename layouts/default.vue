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
main {
}
</style>
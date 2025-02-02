<template>
  <main>
    <div class="container md:flex md:flex-row relative gap-12">
      <DocsNavigation />
      <div class="w-full min-w-0 max-w-full">
        <slot />
      </div>
    </div>
  </main>
</template>

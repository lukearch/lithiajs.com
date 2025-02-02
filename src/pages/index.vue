<template>
  <div
    class="h-screen w-full container flex items-center justify-center relative">
    <NuxtImg
      draggable="false"
      src="neon-leafs.svg"
      class="absolute h-[calc(100%-77px)] opacity-35" />
    <div class="relative z-[5] flex flex-col items-center w-full gap-8">
      <h1 class="intro-title">
        The <strong>Next-Gen</strong> Framework
        <br />
        for <strong>Node.js</strong> and
        <strong>TS</strong>
      </h1>
      <p class="intro-description max-w-[700px] mx-auto text-gray-100">
        Lithia is an open-source framework that enables you to create
        <strong>elastic</strong>, <strong>modern</strong>, and
        <strong>powerful</strong>
        server-side applications with Node.js and TypeScript.
      </p>
      <div class="flex gap-4 flex-col md:flex-row">
        <NuxtLink to="/docs">
          <CtaButton>
            Get Started
            <Icon name="akar-icons:arrow-right" size="16" />
          </CtaButton>
        </NuxtLink>
        <AnimatedButton
          v-if="width >= 1024"
          font-family="Geist Mono, monospace"
          @click="copy">
          <Icon name="lucide:terminal" size="16" class="mr-2" />
          {{ scaffoldCommand }}
        </AnimatedButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { width } = useWindowSize();
const toast = useToast();
const scaffoldCommand = 'npx create-lithia-app@latest';

const copy = () => {
  navigator.clipboard.writeText(scaffoldCommand);

  toast.add({
    title: 'Copied to clipboard',
    icon: 'lucide:check',
  });
};
</script>

<style>
strong {
  color: theme('colors.spring-green.400');
  font-weight: 700;
}

.intro-title {
  font-size: theme('fontSize.7xl');
  font-weight: 700;
  letter-spacing: -0.05em;
  line-height: 1;
  text-align: center;
  transition: all 0.2s ease-out;
}

.intro-description {
  font-size: theme('fontSize.xl');
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.5;
  text-align: center;
  transition: all 0.2s ease-out;
}

@media screen and (max-width: 640px) {
  .intro-title {
    font-size: theme('fontSize.4xl');
  }

  .intro-description {
    font-size: theme('fontSize.lg');
  }
}
</style>

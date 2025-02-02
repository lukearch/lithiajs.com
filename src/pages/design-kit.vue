<template>
  <main class="py-12">
    <PageWelcome title="Design Kit" class="mb-12">
      <template #description>
        The Lithia.js design kit contains all the resources you need to create
        beautiful and consistent designs. It includes the logo, color palette,
        typography, and more. Use these resources to create stunning designs
        that reflect the Lithia.js brand.
      </template>
    </PageWelcome>
    <DesignKitSection title="Lithia.js Logo">
      <template #description>
        The logo is made from a combination of a leaf and the wordmark. In most
        cases, they should appear together. The leaf can be used as a standalone
        icon in some cases, but the wordmark should never be used without the
        leaf.
      </template>

      <DesignKitSubSection title="Icon">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <DesignKitCard
            name="Green"
            :image="{
              src: '/design-kit/icon/icon-green.svg',
              width: 44,
              height: 56,
            }" />
          <DesignKitCard
            name="Black"
            :image="{
              src: '/design-kit/icon/icon-black.svg',
              width: 44,
              height: 56,
            }"
            class="bg-white" />
          <DesignKitCard
            name="White"
            :image="{
              src: '/design-kit/icon/icon-white.svg',
              width: 44,
              height: 56,
            }" />
        </div>
      </DesignKitSubSection>
      <DesignKitSubSection title="Logo">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <DesignKitCard
            name="Green & White"
            :image="{
              src: '/design-kit/logo/logo-green-white.svg',
              width: 207.6,
              height: 56,
            }" />
          <DesignKitCard
            name="Black"
            :image="{
              src: '/design-kit/logo/logo-black.svg',
              width: 207.6,
              height: 56,
            }"
            class="bg-white" />
          <DesignKitCard
            name="White"
            :image="{
              src: '/design-kit/logo/logo-white.svg',
              width: 207.6,
              height: 56,
            }" />
          <DesignKitCard
            name="Green & Black"
            :image="{
              src: '/design-kit/logo/logo-green-black.svg',
              width: 207.6,
              height: 56,
            }"
            class="bg-white" />
        </div>
      </DesignKitSubSection>
    </DesignKitSection>
    <DesignKitSection title="Color Palette">
      <template #description>
        Our color palette is inspired by the colors of nature. The primary color
        is
        <NuxtLink
          href="https://coolors.co/2cfc81"
          target="_blank"
          class="text-spring-green-400"
          >Spring green</NuxtLink
        >, which represents growth and harmony. The background color is
        <NuxtLink
          href="https://coolors.co/030712"
          target="_blank"
          class="text-spring-green-400"
          >Rich black</NuxtLink
        >, which provides a sense of stability and depth. When creating
        Lithia.js content, always use these colors to maintain consistency.
      </template>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <DesignKitCard
          name="Spring Green"
          :color="{
            hex: '#2CFC81',
          }"
          class="bg-spring-green-400" />
        <DesignKitCard
          name="Rich Black"
          :color="{
            hex: '#030712',
          }" />
      </div>
    </DesignKitSection>
  </main>
</template>

<script lang="ts" setup></script>

<style></style>

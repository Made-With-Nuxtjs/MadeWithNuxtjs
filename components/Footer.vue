<template>
  <footer class="mx-auto w-full transition-transform fixed bottom-0" :class="{ 'translate-y-full': !isFooterVisible, 'translate-y-0': isFooterVisible }" style="transition: transform 0.5s ease-in-out;">
    <div class="px-5 md:px-20 lg:px-24 xl:px-20 py-[11px] md:py-[9px] lg:py-[9px] xl:py-[7px] lg:flex xl:flex sm:justify-between md:justify-between lg:justify-between xl:justify-between bg-light-background-tertiary dark:bg-dark-background-tertiary md:flex md:items-center">
      <span class="hidden md:flex lg:flex xl:flex lg:justify-center xl:justify-center xl:gap-1 items-center mt-3 lg:mt-2 xl:mt-2 sm:text-center">
        <UIcon name="material-symbols-light:copyright-outline-sharp" size="xl" />
        <p>{{ year }}
          <a href="https://www.ictlayer.com/"> ICT Layer</a>. All Rights Reserved.
        </p>
      </span>
      <div class="flex justify-center mt-2 space-x-5">
        <UIcon name="material-symbols-light:share" :class="{
          'text-[24px] cursor-pointer': true
        }" :disabled="!isSupported" @click="startShare" />
      </div>
    </div>
    <ScrollToTop />
  </footer>
</template>
<script setup lang="ts">
import { useDateFormat, useNow, useShare } from '@vueuse/core'
const { share, isSupported } = useShare()
function startShare() {
  share({
    title: 'Hello',
    text: 'Hello my friend!',
    url: location.href,
  })
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll); // Add scroll listener
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll); // Remove scroll listener
});

const year = useDateFormat(useNow(), 'YYYY')

const isFooterVisible = ref(true); // Footer visibility state (visible on load)

let lastScrollTop = 0; // Keeps track of the last scroll position
let windowHeight = 0;
let documentHeight = 0;

function handleScroll() {
  const currentScrollTop = window.scrollY; // Current vertical scroll position
  const scrollBottom = currentScrollTop + windowHeight;

  // Footer logic:
  if (scrollBottom >= documentHeight) {
    isFooterVisible.value = true; // At the bottom, show footer
  } else if (currentScrollTop === 0) {
    isFooterVisible.value = true; // On landing page or initial position
  } else if (currentScrollTop < lastScrollTop) {
    isFooterVisible.value = true; // Scrolling up, show footer
  } else {
    isFooterVisible.value = false; // Scrolling down, hide footer
  }

  lastScrollTop = currentScrollTop; // Update last scroll position
}

onMounted(() => {
  windowHeight = window.innerHeight; // Set the height of the viewport
  documentHeight = document.body.scrollHeight; // Set the height of the document

  window.addEventListener('scroll', handleScroll); // Add scroll listener
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll); // Remove scroll listener
});

</script>
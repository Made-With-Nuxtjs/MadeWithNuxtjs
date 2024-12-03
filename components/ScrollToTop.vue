<script setup lang="ts">

const is_rightSidebar = rightSidebarExpand()

const showScrollButton = ref(false); // State to show/hide the scroller button

// Function to scroll to the top smoothly
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Track scroll position for button visibility
function handleScroll() {
  const currentScrollTop = window.scrollY;
  showScrollButton.value = currentScrollTop > 200; // Show button when scrolled down
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll); // Add scroll listener
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll); // Remove scroll listener
});
</script>

<template>
<UButton
:class="{
      'right-[262px] lg:right-[262px] xl:right-[262px]': is_rightSidebar,
      'right-2 md:right-[72px] lg:right-[72px] xl:right-[72px]': !is_rightSidebar
    }"
    v-show="showScrollButton"
    icon="material-symbols-light:arrow-upward"
    size="md"
    class="fixed bottom-[65px] lg:bottom-[60px] xl:bottom-[60px] animate-bounce z-50 bg-gray-400 hover:bg-gray-500 dark:bg-gray-400 dark:hover:bg-gray-300 rounded-full shadow-lg"
    @click="scrollToTop"
    aria-label="Scroll to Top"
  />
</template>



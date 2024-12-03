<template>
    <header>
        <nav class="fixed shadow-lg top-0 z-40 w-full transition-transform ease-in-out bg-light-background-primary dark:bg-dark-background-primary dark:border-gray-700 h-[72px] lg:h-[92px] xl:h-[92px]" :class="{ '-translate-y-full': !isHeaderVisible, 'translate-y-0': isHeaderVisible }">
            <div class="flex justify-between items-center mx-auto px-3 pt-5 lg:pt-6 xl:pt-6">
                <div class="flex justify-between items-center w-40 sm:w-48 md:w-48 lg:w-48 xl:w-48">
                    <div class="pl-0 md:pl-1 lg:pl-2 xl:pl-2">
                        <UIcon @click="is_leftSidebar()" :name="!leftExpand ? 'material-symbols-light:menu' : 'material-symbols-light:menu-open'" :class="{
                            'text-[28px]': true
                        }" class="cursor-pointer hover:bg-gray-900 dark:hover:bg-gray-300" />
                    </div>
                    <div class="pl-4 lg:pl-2 xl:pl-2">
                        <a href="/"><NuxtImg src="/logo.svg" alt="logo" class="w-32" /></a>
                    </div>
                </div>
                <div class="flex justify-between items-center w-32 sm:w-48 md:w-60 lg:w-60 xl:w-60">
                    <div class="flex justify-center items-center gap-5 pb-1">
                        <UIcon name="material-symbols-light:search" @click="search()" :class="{
                            'text-[28px]': true
                        }" class="cursor-pointer hover:bg-gray-900 dark:hover:bg-gray-300" />
                        <UChip text="2" size="lg" :ui="{
                            base: 'absolute rounded-full ring-1 ring-gray-800 dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium whitespace-nowrap',
                            background: 'bg-gray-700 dark:bg-{color}-400',
                        }">
                            <UIcon name="material-symbols-light:add-shopping-cart" :class="{
                                'text-[28px]': true
                            }" class="cursor-pointer hover:bg-gray-900 dark:hover:bg-gray-300 light-text-primary" />
                        </UChip>
                        <div class="hidden md:flex lg:flex xl:flex">
                            <UIcon name="material-symbols-light:login-outline" :class="{
                                'text-[28px]': true
                            }" class="cursor-pointer hover:bg-gray-900 dark:hover:bg-gray-300" />
                        </div>
                        <div class="hidden md:flex lg:flex xl:flex">
                            <UIcon name="material-symbols-light:account-box-outline" :class="{
                                'text-[28px]': true
                            }" class="cursor-pointer hover:bg-gray-900 dark:hover:bg-gray-300" />
                        </div>
                    </div>
                    <div class="pr-2">
                        <UIcon @click="is_rightSidebar()" :name="!rightExpand ? 'material-symbols-light:menu' : 'material-symbols-light:menu-open'" :class="{
                            'text-[28px]': true
                        }" class="cursor-pointer hover:bg-gray-900 dark:hover:bg-gray-300" />
                    </div>
                </div>
            </div>
        </nav>
    </header>
    <!-- Search Modal -->
    <UModal v-model="isOpen" :transition="false">
        <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
            <template #header>
                <div class="h-4">
                    <h1>Search</h1>
                </div>
            </template>
            <UInput v-model="q" name="search" placeholder="Search..." icon="material-symbols-light:search" autocomplete="off" :ui="{ icon: { trailing: { pointer: '' } } }">
                <template #trailing>
                    <UButton v-show="q !== ''" color="gray" variant="link" icon="material-symbols-light:search" :padded="false" @click="q = ''" />
                </template>
            </UInput>
            <template #footer>
                <div class="h-8">
                    Footer
                </div>
            </template>
        </UCard>
    </UModal>
</template>
<script setup lang="ts">
// import { ref, onMounted, onUnmounted } from 'vue';
// import { Footer } from '../.nuxt/components';

const breakpoints = {
    mobile: '(max-width: 639px)',
    sm: '(min-width: 640px) and (max-width: 767px)',
    md: '(min-width: 768px) and (max-width: 1023px)',
    lg: '(min-width: 1024px) and (max-width: 1279px)',
    xl: '(min-width: 1280px)',
};

const q = ref('')
const isOpen: any = ref(false)

function search() {
    if (typeof window !== 'undefined' && window.matchMedia) {
        if (window.matchMedia(breakpoints.mobile).matches) {
            // isOpen.value = false
        }
        else {
            isOpen.value = true
        }
    }
}

const openLeftSidebar = leftSidebarExpand()
const openRightSidebar = rightSidebarExpand()

const leftExpand: any = ref(false)
const rightExpand: any = ref(false)

function is_rightSidebar() {
    openRightSidebar.value = !openRightSidebar.value
    rightExpand.value = !rightExpand.value
    if (leftExpand.value == true && openLeftSidebar.value == true) {
        leftExpand.value = false
        openLeftSidebar.value = false
    }
}

function is_leftSidebar() {
    openLeftSidebar.value = !openLeftSidebar.value
    leftExpand.value = !leftExpand.value
    if (rightExpand.value == true && openRightSidebar.value == true) {
        rightExpand.value = false
        openRightSidebar.value = false
    }
}

// On Scroll

const isHeaderVisible = ref(true); // Header visibility state

let lastScrollTop = 0; // Keeps track of the last scroll position
let windowHeight = 0;
let documentHeight = 0;

function handleScroll() {
    const currentScrollTop = window.scrollY; // Current vertical scroll position


    // Header logic:
    // - Show on scrolling down
    // - Hide on scrolling up
    // - Always show when scrollTop = 0
    if (currentScrollTop <= 0) {
        isHeaderVisible.value = true; // At the top, show header
    } else if (currentScrollTop > lastScrollTop) {
        isHeaderVisible.value = true; // Scrolling down, show header
    } else {
        isHeaderVisible.value = false; // Scrolling up, hide header
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

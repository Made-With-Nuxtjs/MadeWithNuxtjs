<script setup lang="ts">

// Theme Mode Start --------****
const colorMode = useColorMode()
const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
})

// Theme Mode End --------****
</script>
<template>
    <ClientOnly>
        <UButton :icon="isDark ? 'material-symbols-light:wb-sunny-rounded' : 'material-symbols-light:nightlight'" color="black" variant="ghost" :class="{
            'text-[28px]': true
        }" aria-label="Theme" @click="isDark = !isDark" />
    </ClientOnly>
</template>

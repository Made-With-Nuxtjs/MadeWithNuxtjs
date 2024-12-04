<script setup lang="ts">
const appConfig = useAppConfig()
useSeoMeta({
    title: 'Card Page | Nuxt UI Design',
})
</script>
<template>
    <main class="mt-16 sm:mt-2 md:mt-2 lg:mt-6 xl:mt-7">
        <section>
            <div class="pt-3">
                <h3>Card Shape #1</h3>
                <div class="pt-2">
                    <UDivider />
                </div>
            </div>
            <div class="p-4 mt-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                <CardsShape />
            </div>
        </section>
    </main>
</template>
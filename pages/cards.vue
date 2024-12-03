<script setup lang="ts">
const appConfig = useAppConfig()
useSeoMeta({
    title: 'Card Page | Nuxt UI Design',
})
</script>
<template>
    <main class="mt-24 md:mt-24 lg:mt-24 xl:mt-24 mb-20">
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
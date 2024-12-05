<script setup lang="ts">
const appConfig = useAppConfig()
useSeoMeta({
    title: 'Card Page | Nuxt UI Design',
})
</script>
<template>
    <main class="mt-16 sm:mt-2 md:mt-2 lg:mt-6 xl:mt-7 flex flex-col gap-4">
        <!-- Card Shape style section -->
        <section class="paperStyle p-4">
            <div>
                <h3>Card Shape #1</h3>
                <UDivider color="white" class="py-4" />
            </div>
            <CardsShape />
        </section>

        <!-- Card style by Best Buy -->
        <section class="paperStyle p-4">
            <div>
                <h3>Card Best Buy #2</h3>
                <UDivider color="white" class="py-4" />
            </div>
            <CardsBestBuy />
        </section>
        

    </main>
</template>
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

        <!-- Card style by E-commerce Big -->
        <section class="paperStyle p-4">
            <div>
                <h3>Card E-commerce (Big)  #2</h3>
                <UDivider color="white" class="py-4" />
            </div>
            <CardsE-commerce />
        </section>

         <!-- Card style by E-commerce Md -->
         <section class="paperStyle p-4">
            <div>
                <h3>Card E-commerce (Md)  #3</h3>
                <UDivider color="white" class="py-4" />
            </div>
            <CardsE-commerceMd />
        </section>
         <!-- Card style by E-commerce Sm -->
         <section class="paperStyle p-4">
            <div>
                <h3>Card E-commerce (Sm)  #4</h3>
                <UDivider color="white" class="py-4" />
            </div>
            <CardsE-commerceSm />
        </section>
        

    </main>
</template>
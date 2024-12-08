<script setup lang="ts">
useSeoMeta({
    title: 'Typography Page | Nuxt UI Design | Made With Nuxt JS',
})
</script>
<template>
    <main class="mt-16 sm:mt-2 md:mt-2 lg:mt-6 xl:mt-7 flex flex-col justify-start gap-4">
        <!-- Page Title  -->
        <section class="paperStyle p-4">
            <h1>Typography</h1>
        </section>
        <!-- Heading Tag -->
        <section class="paperStyle p-4">
            <div class="flex justify-start items-center">
                <div class="w-36">
                    <h3>HTML Tag</h3>
                </div>
                <div>
                    <h3>Front View</h3>
                </div>
            </div>
            <UDivider class="py-2" />
            <div class="flex justify-start items-center">
                <div class="w-36">
                    <UBadge>h1</UBadge>
                </div>
                <div>
                    <h1>Headline 1</h1>
                </div>
            </div>
            <div class="flex justify-start items-center py-2">
                <div class="w-36">
                    <UBadge>h2</UBadge>
                </div>
                <div>
                    <h2>Headline 2</h2>
                </div>
            </div>
            <div class="flex justify-start items-center py-2">
                <div class="w-36">
                    <UBadge>h3</UBadge>
                </div>
                <div>
                    <h3>Headline 3</h3>
                </div>
            </div>
            <div class="flex justify-start items-center py-2">
                <div class="w-36">
                    <UBadge>h4</UBadge>
                </div>
                <div>
                    <h4>Headline 4</h4>
                </div>
            </div>
            <div class="flex justify-start items-center py-2">
                <div class="w-36">
                    <UBadge>h5</UBadge>
                </div>
                <div>
                    <h5>Headline 5</h5>
                </div>
            </div>
            <div class="flex justify-start items-center py-2">
                <div class="w-36">
                    <UBadge>h6</UBadge>
                </div>
                <div>
                    <h6>Headline 6</h6>
                </div>
            </div>
        </section>
        <!-- HTML Tag -->
        <section class="paperStyle p-4">
            <div class="flex justify-start items-center ">
                <div class="w-36">
                    <h3>HTML Tag</h3>
                </div>
                <div>
                    <h3>Front View</h3>
                </div>
            </div>
            <UDivider class="py-2" />
            <div class="flex flex-row justify-start items-center py-3">
                <div class="w-36">
                    <UBadge>Default</UBadge>
                </div>
                <div class="w-full">
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                        unde suscipit, quam beatae rerum inventore consectetur.</div>
                </div>
            </div>
            <div class="flex flex-row justify-start items-center py-2">
                <div class="w-36">
                    <UBadge>div</UBadge>
                </div>
                <div class="w-full">
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                        unde suscipit, quam beatae rerum inventore consectetur.</div>
                </div>
            </div>
            <div class="flex flex-row justify-start items-center py-2">
                <div class="w-36">
                    <UBadge>P</UBadge>
                </div>
                <div class="w-full">
                    <p>Body 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                        dignissimos.</p>
                </div>
            </div>
            <div class="flex justify-start items-center py-2">
                <div class="w-36">
                    <UBadge>li</UBadge>
                </div>
                <div>
                    <ui>
                        <li>
                            Home
                        </li>
                        <li>
                            Home
                        </li>
                    </ui>
                </div>
            </div>
            <div class="flex flex-row justify-start items-center py-2">
                <div class="w-36">
                    <UBadge>span</UBadge>
                </div>
                <div class="w-full">
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis
                        tenetur
                        unde suscipit, quam beatae rerum inventore consectetur.</span>
                </div>
            </div>
            <div class="flex flex-row justify-start items-center py-2">
                <div class="w-36">
                    <UBadge>a</UBadge>
                </div>
                <div class="w-full">
                    <a href="#">Lorem ipsum dolor sits.</a>
                </div>
            </div>
        </section>
        <!-- Class Name -->
        <section class="paperStyle p-4">
            <div class="flex justify-start items-center">
                <div class="w-36">
                    <h3>Class Name</h3>
                </div>
                <div>
                    <h3>Front View</h3>
                </div>
            </div>
            <UDivider class="py-2" />
            <div class="flex flex-row justify-start items-center py-2">
                <div class="w-36">
                    <UBadge>currency</UBadge>
                </div>
                <div class="w-96">
                    <p class="discount">50,000.00</p>
                </div>
            </div>
            <div class="flex flex-row justify-start items-center py-2">
                <div class="w-36">
                    <UBadge>discount</UBadge>
                </div>
                <div class="w-96">
                    <p class="discount">50%</p>
                </div>
            </div>
            <div class="flex flex-row justify-start items-center py-2">
                <div class="w-36">
                    <UBadge>strike</UBadge>
                </div>
                <div class="w-96">
                    <p class="currency-strike">50,000.00</p>
                </div>
            </div>
        </section>
    </main>
</template>

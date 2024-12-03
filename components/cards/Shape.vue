<template>
    <div class="flex flex-wrap items-start justify-center gap-4">
        <UCard class="w-80 sm:w-80 md:w-[350px] lg:w-[414px] xl:w-[414px] h-100" :ui="{
            body: {
                padding: 'px-0 py-0 sm:p-0'
            },
        }">
            <NuxtImg class="rounded-t-lg" src="https://placehold.co/400" alt="card-image" />
            <template #footer>
                <h4>Madrid Corner Sofa</h4>
                <p class="currency">
                    Price: 12,000.00 TK.
                </p>
                <div class="pt-3">
                    <UButton icon="material-symbols-light:add-shopping-cart" size="sm" color="green" variant="solid" label="Add To Cart" :trailing="false" />
                </div>
            </template>
        </UCard>
        <!-- Second card -->
        <UCard class="w-80 sm:w-80 md:w-[350px] lg:w-[414px] xl:w-[414px] rounded-none h-100" :ui="{
            body: {
                padding: 'px-0 py-0 sm:p-0'
            },
        }">
            <NuxtImg class="cursor-pointer" src="https://placehold.co/400" alt="card-image" />
            <template #footer>
                <h4>Madrid Corner Sofa</h4>
                <div class="flex justify-between">
                    <p class="currency">
                        Price: 12,000.00 TK.
                    </p>
                    <p class="discount">
                        Discount: 50%
                    </p>
                </div>
                <div class="pt-3">
                    <UButton icon="material-symbols-light:add-shopping-cart" size="sm" color="green" variant="solid" label="Add To Cart" :trailing="false" />
                </div>
            </template>
        </UCard>
        <UCard class="w-80 sm:w-80 md:w-[350px] lg:w-[414px] xl:w-[414px] bg-gray-300 dark:bg-gray-500 h-60 rounded-none" :ui="{
            body: {
                padding: 'px-0 py-0 sm:p-0'
            },
        }">
            <div>
                <NuxtImg class="cursor-pointer object-cover w-full" src="https://placehold.co/400" alt="card-image" style="height: 150px;" />
            </div>
            <div class="p-4">
                <h4>Madrid Corner Sofa</h4>
                <div class="flex justify-between">
                    <p class="currency">
                        Price: 12,000.00 TK.
                    </p>
                    <UButton icon="material-symbols-light:add-shopping-cart" size="sm" color="green" variant="solid" label="Add To Cart" :trailing="false" />
                </div>
            </div>
        </UCard>
        <!-- Third card -->
        <div class="w-80 sm:w-80 md:w-[350px] lg:w-[414px] xl:w-[414px] rounded-t-full flex flex-col items-center bg-gray-500 shadow-lg overflow-hidden">
            <img alt="card-img" class="cursor-pointer object-cover w-full h-64 rounded-t-full" src="https://placehold.co/400" />
            <div class="flex flex-col justify-center items-center py-3 bg-gray-500 rounded-b-full">
                <h4>
                    Madrid Corner Sofa
                </h4>
                <p class="currency">
                    Price: 12,000.00 TK.
                </p>
                <div class="pt-3">
                    <UButton icon="material-symbols-light:add-shopping-cart" size="sm" color="green" variant="solid" label="Add To Cart" :trailing="false" />
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.pentagon {
    width: 200px;
    height: 200px;
    background: white;
    position: relative;
    clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
}
</style>
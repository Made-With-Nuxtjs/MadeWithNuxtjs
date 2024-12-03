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
        <!-- -----------------------For Circle --------------------------------- -->
        <!-- <div
            class="p-4 w-80 sm:w-80 md:w-[350px] lg:w-[414px] xl:w-[414px] rounded-full flex flex-col items-center bg-gray-500 shadow-lg">
            <img alt="A detailed image of a modern, stylish corner sofa in a living room setting"
                class="cursor-pointer object-cover w-40 h-40 rounded-full" height="200"
                src="https://storage.googleapis.com/a1aa/image/z8go8Hka76LXPBXr7nRFk6gF5BaPFrk1dtEMFlMfQTRsKk7JA.jpg"
                width="200" />
            <div class="flex flex-col justify-center items-center pt-3">
                <h4 class="text-lg font-semibold">
                    Madrid Corner Sofa
                </h4>
                <p class="price text-gray-700">
                    Price:
                    <data value="12000">
                        12,000.00 TK
                    </data>
                </p>
                <div class="pt-3">
                    <button class="bg-green-500 text-white px-4 py-2 rounded-full flex items-center">
                        <i class="material-symbols-light:add-shopping-cart mr-2">
                        </i>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div> -->
        <div class="relative w-80 sm:w-80 md:w-[350px] lg:w-[414px] xl:w-[414px]">
            <div class="pentagon border border-black flex flex-col items-center justify-center h-full w-full" style="height: 350px; width: 100%;">
                <img alt="Product Image" class="w-full h-full object-cover" src="https://placehold.co/400" />
                <div class="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2 text-center">
                    <h4>
<<<<<<< Updated upstream:components/cards/Shape/One.vue
                    Madrid Corner Sofa
                </h4>
                <span class="currency">
                    Price: 12,000.00 TK.
                </span>
=======
                        Madrid Corner Sofa
                    </h4>
                    <span class="text-gray-900">
                        Price: 12,000.00 TK.
                    </span>
>>>>>>> Stashed changes:components/cards/Shape.vue
                </div>
            </div>
        </div>
        <!-- <div class="p-4 w-80 sm:w-80 md:w-[350px] lg:w-[414px] xl:w-[414px] bg-gray-600 flex flex-col items-center">
            <div class="w-0 h-0 
  border-l-[50px] border-l-transparent
  border-b-[75px] border-b-yellow-500
  border-r-[50px] border-r-transparent">
</div>
        </div> -->
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
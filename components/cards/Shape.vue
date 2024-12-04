<template>
    <div class="flex flex-wrap items-start justify-center gap-4">
        <!-- Rectangle Shape -->
        <UCard class="card card-1 ratio-4-3" :ui="{
            body: {
                padding: 'px-0 py-0 sm:p-0',
                background: 'bg-light-background-card dark:bg-dark-background-card',
            },
        }">
            <NuxtImg alt="card-img" class="cursor-pointer w-full" src="https://placehold.co/500" />
            <div class="p-4">
                <h3 class="cursor-pointer">Durban Corner Sofa</h3>
                <div class="flex justify-between pt-2">
                    <div>
                        <p class="currency">Price: 80,000.00 Tk.</p>
                        <p class="currency-strike">86,000.00 Tk.</p>
                    </div>
                    <UBadge class="my-2">Save 5%</UBadge>
                </div>
            </div>
        </UCard>

        <!-- Rectangle Rounded Shape -->
        <UCard class="card card-2 ratio-4-3" :ui="{
            body: {
                padding: 'px-0 py-0 sm:p-0',
                background: 'bg-light-background-card dark:bg-dark-background-card',
            },
        }">
            <NuxtImg alt="card-img" class="cursor-pointer w-full rounded-t-lg" src="https://placehold.co/400" />
            <div class="p-4">
                <h3 class="cursor-pointer">Durban Corner Sofa</h3>
                <div class="flex justify-between pt-2">
                    <div>
                        <p class="currency">Price: 80,000.00 Tk.</p>
                        <p class="currency-strike">86,000.00 Tk.</p>
                    </div>
                    <UBadge class="my-2">Save 5%</UBadge>
                </div>
            </div>
        </UCard>

        <!-- Circle Shape -->
        <UCard class="card-circle ratio-4-3" :ui="{
            body: {
                padding: 'px-0 py-0 sm:p-0',
                background: 'bg-light-background-card dark:bg-dark-background-card',
            },
        }">
            <NuxtImg alt="card-img" class="cursor-pointer object-cover w-full h-full" src="https://placehold.co/400" />

        </UCard>

        <!-- Semicircle Shape -->
        <UCard class="semicircle rounded-t-full" :ui="{
            body: {
                padding: 'px-0 py-0 sm:p-0',
                background: 'bg-light-background-card dark:bg-dark-background-card',
            },
        }">
            <NuxtImg alt="card-img" class="cursor-pointer w-full" src="https://placehold.co/400" />
            <div class="p-4">
                <h3 class="cursor-pointer">Durban Corner Sofa</h3>
                <div class="flex justify-between pt-2">
                    <div>
                        <p class="currency">Price: 80,000.00 Tk.</p>
                        <p class="currency-strike">86,000.00 Tk.</p>
                    </div>
                    <UBadge class="my-2">Save 5%</UBadge>
                </div>
            </div>
        </UCard>

        <!-- Pentagon Shape -->
        <UCard class="pentagon ratio-4-3" :ui="{
            body: {
                padding: 'px-0 py-0 sm:p-0',
                background: 'bg-gray-300 dark:bg-dark-background-card',
            },
        }">
            <NuxtImg alt="card-img" class="cursor-pointer w-full" src="https://placehold.co/400" />
            <div class="p-4 flex flex-col justify-center items-center">
                <h3 class="cursor-pointer">Durban Corner Sofa</h3>
                <UBadge class="my-1">Save 5%</UBadge>
                <p class="currency">Price: 80,000.00 Tk.</p>
                <p class="currency-strike">86,000.00 Tk.</p>
            </div>
        </UCard>
    </div>
</template>

<template>
    <div class="flex flex-wrap items-start justify-center gap-4">

        <!-- First UCard -->
        <UCard class="card card-2 ratio-4-3" :ui="{
            body: {
                padding: 'px-0 py-0 sm:p-0',
                background: 'bg-light-background-card dark:bg-dark-background-card',
            },
        }">
            <!-- Image Section -->
            <div class="relative">
                <NuxtImg src="https://placehold.co/400" alt="Madrid Corner Sofa" class="w-full" />
            </div>
            <div class="p-4 flex flex-col gap-2">
                <h5 class="cursor-pointer pt-2">Cape Town Sofa Cum Bed 2 Seater</h5>
                <p class="currency text-end">Price: 80,000.00 Tk.</p>
            </div>
        </UCard>

        <!-- 2nd UCard -->
        <UCard class="card card-2 ratio-4-3" :ui="{
            body: {
                padding: 'px-0 py-0 sm:p-0',
                background: 'bg-light-background-card dark:bg-dark-background-card',
            },
        }">
            <!-- Image Section -->
            <div class="relative">
                <NuxtImg src="https://placehold.co/400" alt="Madrid Corner Sofa" class="w-full" />
                <div class="absolute bg-transparent" style="top: 10px; left: 10px;">
                    <UIcon name="material-symbols-light:bookmark-sharp" class="w-5 h-5" />
                </div>
                <div class="absolute flex justify-center items-center" style="top: 10px; right: 12px; opacity: 100%">
                    <UIcon name="material-symbols-light:trending-up" class="w-5 h-5" />
                    <p>3k</p>
                </div>
            </div>         
            <div class="p-4 flex flex-col gap-2">
                <h5 class="cursor-pointer pt-2">Cape Town Sofa Cum Bed 2 Seater</h5>
                <p class="currency text-end">Price: 80,000.00 Tk.</p>
            </div>
        </UCard>

        <!-- 3rd UCard -->
        <UCard class="card card-2 ratio-4-3" :ui="{
            body: {
                padding: 'px-0 py-0 sm:p-0',
                background: 'bg-light-background-card dark:bg-dark-background-card',
            },
        }">
            <!-- Image Section -->
            <div class="relative">
                <NuxtImg src="https://placehold.co/400" alt="Madrid Corner Sofa" class="w-full" />
                <div class="absolute bg-transparent" style="top: 10px; left: 10px;">
                    <UIcon name="material-symbols-light:bookmark-sharp" class="w-5 h-5" />
                </div>
                <div class="absolute flex justify-center items-center" style="top: 10px; right: 12px; opacity: 100%">
                    <UIcon name="material-symbols-light:trending-up" class="w-5 h-5" />
                    <p>3k</p>
                </div>
                <UBadge class="absolute -bottom-4 right-1 px-3 py-1 rounded-lg shadow-md" :ui="{
                    gap: {
                        xs: 'gap-0.5'
                    },
                }">
                    <UIcon name="material-symbols-light:watch-check" size="md" class="w-5 h-5" />
                    Ends in 2 Months
                </UBadge>
            </div>
            <div class="p-4 flex flex-col gap-2">
                <h5 class="cursor-pointer pt-2">Imperial Dressing Table</h5>
                <div class="flex justify-between">
                    <p class="discount">-50.00%</p>
                    <p class="currency">Price: 15,250.00 Tk.</p>
                </div>
            </div>
        </UCard>

        <!-- 4th UCard -->
        <UCard class="card card-2 ratio-4-3" :ui="{
            body: {
                padding: 'px-0 py-0 sm:p-0',
                background: 'bg-light-background-card dark:bg-dark-background-card',
            },
        }">
            <!-- Image Section -->
            <div class="relative">
                <NuxtImg src="https://placehold.co/400" alt="Madrid Corner Sofa" class="w-full" />
                <div class="absolute bg-transparent" style="top: 10px; left: 10px;">
                    <UBadge color="gray" label="-5.00%" />
                </div>
                <div class="absolute flex justify-center items-center" style="top: 10px; right: 12px; opacity: 100%">
                    <UIcon name="material-symbols-light:trending-up" class="w-5 h-5" />
                    <p>3k</p>
                </div>
                <UBadge class="absolute -bottom-4 right-1 px-3 py-1 rounded-lg shadow-md" :ui="{
                    gap: {
                        xs: 'gap-0.5'
                    },
                }">
                    <UIcon name="material-symbols-light:watch-check" size="lg" class="w-5 h-5" />
                    Ends in 2 Months
                </UBadge>
            </div>
            <div class="p-4 flex flex-col gap-2">
                <h5 class="cursor-pointer pt-2">Cape Town Sofa Cum Bed 2 Seater</h5>
                <div class="flex justify-between">
                    <p class="currency-strike">86,000.00 Tk.</p>
                    <p class="currency">Price: 80,000.00 Tk.</p>
                </div>
            </div>
        </UCard>

        <!-- 5th UCard -->
        <UCard class="card card-2 ratio-4-3" :ui="{
            body: {
                padding: 'px-0 py-0 sm:p-0',
                background: 'bg-light-background-card dark:bg-dark-background-card',
            },
        }">
            <!-- Image Section -->
            <div class="relative">
                <NuxtImg src="https://placehold.co/400" alt="Madrid Corner Sofa" class="w-full" />
                <div class="absolute bg-transparent" style="top: 10px; left: 10px;">
                    <UIcon name="material-symbols-light:bookmark-sharp" class="w-5 h-5" />
                </div>
                <div class="absolute flex justify-center items-center" style="top: 10px; right: 12px; opacity: 100%">
                    <UIcon name="material-symbols-light:trending-up" class="w-5 h-5" />
                    <p>3k</p>
                </div>
            </div>
            <div class="p-4 flex flex-col gap-2">
                <h5 class="cursor-pointer pt-2">Cape Town Sofa Cum Bed 2 Seater</h5>
                <div class="flex justify-between">
                    <p class="currency">Price: 80,000.00 Tk.</p>
                    <div>
                        <UIcon name="material-symbols-light:star-rate" class="w-4 h-4" />
                        <UIcon name="material-symbols-light:star-rate" class="w-4 h-4" />
                        <UIcon name="material-symbols-light:star-rate-half" class="w-4 h-4" />
                    </div>
                </div>
            </div>
        </UCard>

    </div>
</template>

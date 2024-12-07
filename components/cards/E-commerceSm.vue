<template>
    <div class="flex flex-wrap items-start justify-center gap-4">

        <!-- First UCard -->
        <UCard class="card-2 ratio-4-3 max-w-[150px]" :ui="{
            body: {
                padding: 'px-0 py-0 sm:p-0',
                background: 'bg-light-background-card dark:bg-dark-background-card',
            },
        }">
            <!-- Image Section -->
            <div class="relative cursor-pointer">
                <NuxtImg src="https://placehold.co/150" alt="Madrid Corner Sofa" />
            </div>
            <div class="p-4 flex flex-col gap-2">
                <p class="cursor-pointer pt-2">Cape Town Sofa Cum Bed 2 Seater</p>
                <p class="currency text-end">80,000.00 Tk.</p>
            </div>
        </UCard>

        <!-- 2nd UCard -->
        <UCard class="card-2 ratio-4-3 max-w-[150px]" :ui="{
            body: {
                padding: 'px-0 py-0 sm:p-0',
                background: 'bg-light-background-card dark:bg-dark-background-card',
            },
        }">
            <!-- Image Section -->
            <div class="relative cursor-pointer">
                <NuxtImg src="https://placehold.co/150" alt="Madrid Corner Sofa" />
                <div class="absolute bg-transparent" style="top: 10px; left: 10px;">
                    <UIcon name="material-symbols-light:bookmark-sharp" class="w-5 h-5 text-primary-500" />
                </div>
                <div class="absolute flex justify-center items-center" style="top: 10px; right: 12px; opacity: 100%">
                    <UIcon name="material-symbols-light:trending-up" class="w-5 h-5 text-primary-500" />
                    <p>3k</p>
                </div>
            </div>
            <div class="p-4 flex flex-col gap-2">
                <p class="cursor-pointer pt-2">Cape Town Sofa Cum Bed 2 Seater</p>
                <p class="currency text-end">80,000.00 Tk.</p>
            </div>
        </UCard>

        <!-- 3rd UCard -->
        <UCard class="card-2 ratio-4-3 max-w-[150px]" :ui="{
            body: {
                padding: 'px-0 py-0 sm:p-0',
                background: 'bg-light-background-card dark:bg-dark-background-card',
            },
        }">
            <!-- Image Section -->
            <div class="relative cursor-pointer">
                <NuxtImg src="https://placehold.co/150" alt="Madrid Corner Sofa" />
                <div class="absolute bg-transparent" style="top: 10px; left: 10px;">
                    <UIcon name="material-symbols-light:bookmark-sharp" class="w-5 h-5 text-primary-500" />
                </div>
                <div class="absolute flex justify-center items-center" style="top: 10px; right: 12px; opacity: 100%">
                    <UIcon name="material-symbols-light:trending-up" class="w-5 h-5 text-primary-500" />
                    <p>3k</p>
                </div>
                <UBadge class="absolute -bottom-4 right-1" :ui="{
                    gap: {
                        xs: 'gap-0.5'
                    },
                }">
                    <UIcon name="material-symbols-light:watch-check" size="md" class="w-5 h-5" />
                    Ends in 2 Months
                </UBadge>
            </div>
            <div class="p-4 flex flex-col gap-2">
                <p class="cursor-pointer pt-2">Cape Town Sofa Cum Bed 2 Seater</p>
                <div class="flex flex-col text-end">
                    <p class="discount">-50.00%</p>
                    <p>15,250.00 Tk.</p>
                </div>
            </div>
        </UCard>

        <!-- 4th UCard -->
        <UCard class="card-2 ratio-4-3 max-w-[150px]" :ui="{
            body: {
                padding: 'px-0 py-0 sm:p-0',
                background: 'bg-light-background-card dark:bg-dark-background-card',
            },
        }">
            <!-- Image Section -->
            <div class="relative cursor-pointer">
                <NuxtImg src="https://placehold.co/150" alt="Madrid Corner Sofa" />
                <div class="absolute bg-transparent" style="top: 10px; left: 10px;">
                    <UBadge label="-5.00%" />
                </div>
                <div class="absolute flex justify-center items-center" style="top: 10px; right: 12px; opacity: 100%">
                    <UIcon name="material-symbols-light:trending-up" class="w-5 h-5 text-primary-500" />
                    <p>3k</p>
                </div>
                <UBadge class="absolute -bottom-4 right-1" :ui="{
                    gap: {
                        xs: 'gap-0.5'
                    },
                }">
                    <UIcon name="material-symbols-light:watch-check" size="lg" class="w-5 h-5" />
                    Ends in 2 Months
                </UBadge>
            </div>
            <div class="p-4 flex flex-col gap-2">
                <p class="cursor-pointer pt-2">Cape Town Sofa Cum Bed 2 Seater</p>
                <div class="flex flex-col text-end">
                    <p class="currency-strike">86,000.00 Tk.</p>
                    <p>80,000.00 Tk.</p>
                </div>
            </div>
        </UCard>

        <!-- 5th UCard -->
        <UCard class="card-2 ratio-4-3 max-w-[150px]" :ui="{
            body: {
                padding: 'px-0 py-0 sm:p-0',
                background: 'bg-light-background-card dark:bg-dark-background-card',
            },
        }">
            <!-- Image Section -->
            <div class="relative cursor-pointer">
                <NuxtImg src="https://placehold.co/150" alt="Madrid Corner Sofa" />
                <div class="absolute bg-transparent" style="top: 10px; left: 10px;">
                    <UIcon name="material-symbols-light:bookmark-sharp" class="w-5 h-5 text-primary-500" />
                </div>
                <div class="absolute flex justify-center items-center" style="top: 10px; right: 12px; opacity: 100%">
                    <UIcon name="material-symbols-light:trending-up" class="w-5 h-5 text-primary-500" />
                    <p>3k</p>
                </div>

                <UChip class="absolute -bottom-4 right-3 cursor-pointer" text="3" size="lg">
                    <UIcon name="material-symbols-light:recommend-outline-sharp" class="w-6 h-6" />
                </UChip>
            </div>
            <UDivider />
            <div class="p-4 flex flex-col gap-2">
                <p class="cursor-pointer">Cape Town Sofa Cum Bed 2 Seater</p>
                <div class="flex flex-col text-end">
                    <p>80,000.00 Tk.</p>
                    <div>
                        <UIcon name="material-symbols-light:star-rate" class="w-4 h-4 text-primary-500" />
                        <UIcon name="material-symbols-light:star-rate" class="w-4 h-4 text-primary-500" />
                        <UIcon name="material-symbols-light:star-rate-half" class="w-4 h-4 text-primary-500" />
                    </div>
                </div>
            </div>
        </UCard>
        <!-- 6th UCard -->
        <UCard class="card-2 ratio-4-3 max-w-[150px]" :ui="{
            body: {
                padding: 'px-0 py-0 sm:p-0',
                background: 'bg-light-background-card dark:bg-dark-background-card',
            },
        }">
            <!-- Image Section -->
            <div class="relative cursor-pointer">
                <NuxtImg src="https://placehold.co/150" alt="Madrid Corner Sofa" />
                <div class="absolute bg-transparent" style="top: 10px; left: 10px;">
                    <UIcon name="material-symbols-light:bookmark-sharp" class="w-5 h-5 text-primary-500" />
                </div>
                <div class="absolute flex justify-center items-center" style="top: 10px; right: 12px; opacity: 100%">
                    <UIcon name="material-symbols-light:trending-up" class="w-5 h-5 text-primary-500" />
                    <p>3k</p>
                </div>
            </div>
            <UDivider />
            <div class="p-4 flex flex-col gap-2">
                <p class="cursor-pointer">Cape Town Sofa Cum Bed 2 Seater</p>
                <div class="flex flex-col text-end">
                    <p>80,000.00 Tk.</p>
                    <div>
                        <UIcon name="material-symbols-light:star-rate" class="w-4 h-4 text-primary-500" />
                        <UIcon name="material-symbols-light:star-rate" class="w-4 h-4 text-primary-500" />
                        <UIcon name="material-symbols-light:star-rate-half" class="w-4 h-4 text-primary-500" />
                    </div>
                </div>
            </div>
        </UCard>

        <!-- First UCard -->
        <UCard class="card-2 ratio-4-3 max-w-[150px]" :ui="{
            body: {
                padding: 'px-0 py-0 sm:p-0',
                background: 'bg-light-background-card dark:bg-dark-background-card',
            },
        }">
            <!-- Image Section -->
            <div class="relative cursor-pointer">
                <NuxtImg src="https://placehold.co/150" alt="Madrid Corner Sofa" />
            </div>
            <div class="p-4 flex flex-col gap-2">
                <p class="cursor-pointer">Cape Town Sofa Cum Bed 2 Seater</p>
                <p class="text-end">80,000.00 Tk.</p>
            </div>
        </UCard>

        <!-- First UCard -->
        <UCard class="card-2 ratio-4-3 max-w-[150px]" :ui="{
            body: {
                padding: 'px-0 py-0 sm:p-0',
                background: 'bg-light-background-card dark:bg-dark-background-card',
            },
        }">
            <!-- Image Section -->
            <div class="relative cursor-pointer">
                <NuxtImg src="https://placehold.co/150" alt="Madrid Corner Sofa" />
            </div>
            <div class="p-4 flex flex-col gap-2">
                <p class="cursor-pointer pt-2">Cape Town Sofa Cum Bed 2 Seater</p>
                <p class="text-end">80,000.00 Tk.</p>
            </div>
        </UCard>
         <!-- First UCard -->
         <UCard class="card-2 ratio-4-3 max-w-[150px]" :ui="{
            body: {
                padding: 'px-0 py-0 sm:p-0',
                background: 'bg-light-background-card dark:bg-dark-background-card',
            },
        }">
            <!-- Image Section -->
            <div class="relative cursor-pointer">
                <NuxtImg src="https://placehold.co/150" alt="Madrid Corner Sofa" />
            </div>
            <div class="p-4 flex flex-col gap-2">
                <p>Cape Town Sofa Cum Bed 2 Seater</p>
                <p class="text-end">80,000.00 Tk.</p>
            </div>
        </UCard>
         <!-- First UCard -->
         <UCard class="card-2 ratio-4-3 max-w-[150px]" :ui="{
            body: {
                padding: 'px-0 py-0 sm:p-0',
                background: 'bg-light-background-card dark:bg-dark-background-card',
            },
        }">
            <!-- Image Section -->
            <div class="relative cursor-pointer">
                <NuxtImg src="https://placehold.co/150" alt="Madrid Corner Sofa" />
            </div>
            <div class="p-4 flex flex-col gap-2">
                <p>Cape Town Sofa Cum Bed 2 Seater</p>
                <p class="text-end">80,000.00 Tk.</p>
            </div>
        </UCard>

    </div>
</template>

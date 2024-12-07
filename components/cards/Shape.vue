<template>
    <div class="flex flex-wrap items-start justify-center gap-4">
        <!-- Rectangle Shape -->
        <UCard class="card card-1 ratio-4-3" :ui="{
            body: {
                padding: 'px-0 py-0 sm:p-0',
                background: 'bg-light-background-card dark:bg-dark-background-card',
            },
        }">
            <NuxtImg alt="card-img" class="cursor-pointer w-full"
                src="https://placehold.co/300" />
            <div class="absolute bg-transparent" style="top: 10px; left: 10px;">
                <UBadge>50%</UBadge>
            </div>
            <div class="absolute flex justify-center items-center" style="top: 10px; right: 12px; opacity: 100%">
                <UIcon name="material-symbols-light:trending-up" class="w-4 h-4" />
                <p>3k</p>
            </div>
            <div class="p-4 flex flex-col gap-2">
                <h5 class="cursor-pointer">Cape Town Sofa Cum Bed 2 Seater</h5>
                <div class="flex justify-between">
                    <p class="currency-strike">86,000.00 Tk.</p>
                    <p class="currency">Price: 80,000.00 Tk.</p>
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
            <NuxtImg alt="card-img" class="cursor-pointer w-full rounded-t-lg" src="https://placehold.co/300" />
            <div class="absolute flex justify-center items-center" style="top: 10px; right: 12px; opacity: 100%">
                <UIcon name="material-symbols-light:trending-up" class="w-4 h-4" />
                <p>3k</p>
            </div>
            <div class="p-4 flex flex-col gap-2">
                <h5 class="cursor-pointer">Cape Town Sofa Cum Bed 2 Seater</h5>
                <div class="flex justify-between">
                    <p class="discount">OFF 5%</p>
                    <p class="currency">Price: 80,000.00 Tk.</p>
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
            <NuxtImg alt="card-img" class="cursor-pointer object-cover w-full h-full"
                src="https://placehold.co/300" />
            <div class="card-circle-overlay popup-text flex-col gap-2">
                <h5 class="cursor-pointer">Cape Town Sofa</h5>
                <p class="currency">Price: 80,000.00 Tk.</p>
            </div>
        </UCard>

        <!-- Semicircle Shape -->
        <UCard class="semicircle rounded-t-full ratio-4-3" :ui="{
            body: {
                padding: 'px-0 py-0 sm:p-0',
                background: 'bg-light-background-card dark:bg-dark-background-card',
            },
        }">
            <NuxtImg alt="card-img" class="cursor-pointer w-full"
                src="https://placehold.co/300" />
            <div class="p-4 semicircle-overlay">
                <h5 class="cursor-pointer">Durban Corner Sofa</h5>
                <p class="currency">Price: 80,000.00 Tk.</p>
                <p class="currency-strike">86,000.00 Tk.</p>

            </div>
        </UCard>

        <!-- Pentagon Shape -->
        <UCard class="pentagon ratio-4-3" :ui="{
            body: {
                padding: 'px-0 py-0 sm:p-0',
                background: 'bg-gray-300 dark:bg-dark-background-card',
            },
        }">
            <NuxtImg alt="card-img" class="cursor-pointer w-full"
                src="https://placehold.co/300" />
            <div class="p-2 pentagon-overlay text-center">
                <h5 class="cursor-pointer">Durban Corner Sofa</h5>
                <p class="currency">Price: 80,000.00 Tk.</p>
                <p class="currency-strike">86,000.00 Tk.</p>
            </div>
        </UCard>
        
    </div>
</template>

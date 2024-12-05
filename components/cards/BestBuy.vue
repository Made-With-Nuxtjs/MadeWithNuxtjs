<template>
    <div class="flex flex-wrap items-start justify-center gap-4">

        <div class="card section-card ratio-4-3 border-none" :ui="{
            rounded: 'rounded-none',
            body: {
                padding: 'px-0 py-0 sm:p-0',
                background: 'bg-light-background-card dark:bg-dark-background-card',
            },
        }">
            <NuxtImg alt="card-img" class="cursor-pointer"
                src="#" />
            <div class="p-4">
                <h3 class="w-64 py-4">Don’t miss out on exclusive deals.</h3>

                <p class="py-4">Unlock even more exclusive member deals when you become a My Best Buy Plus™ or My Best
                    Buy Total™ member.</p>
                <a href="#" class="pt-2">
                    Discover more exclusive deals</a>
            </div>
        </div>

        <UCard class="card card-1 ratio-4-3 p-4" :ui="{
            body: {
                padding: 'px-0 py-0 sm:p-0',
                background: 'bg-light-background-card dark:bg-dark-background-card',
            },
        }">
            <div class="flex flex-col justify-center items-center">
                <NuxtImg alt="card-img" class="cursor-pointer"
                    src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/9ac5d1ec-3b32-4adb-a2f5-adc8b3c047e9.jpg;maxHeight=240;maxWidth=240" />
                <div class="flex flex-col pt-4 gap-2">
                    <a class="cursor-pointer text-center py-2">Alexzander Corner Sofa</a>
                    <h2>135,000.00 Tk.</h2>
                    <p class="currency-strike text-center">86,000.00 Tk.</p>
                </div>
            </div>
        </UCard>
        <UCard class="card card-1 ratio-4-3 p-4" :ui="{
            body: {
                padding: 'px-0 py-0 sm:p-0',
                background: 'bg-light-background-card dark:bg-dark-background-card',
            },
        }">
        <div class="flex flex-col justify-center items-center">
            <NuxtImg alt="card-img" class="cursor-pointer" 
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/9ac5d1ec-3b32-4adb-a2f5-adc8b3c047e9.jpg;maxHeight=240;maxWidth=240" />
            <div class="flex flex-col pt-4 gap-2">
                <a class="cursor-pointer text-center py-2">Alexzander Corner Sofa</a>
                <h2>135,000.00 Tk.</h2>
                <p class="currency-strike text-center">86,000.00 Tk.</p>
            </div>
        </div>
        </UCard>
        <UCard class="card card-1 ratio-4-3 p-4" :ui="{
            body: {
                padding: 'px-0 py-0 sm:p-0',
                background: 'bg-light-background-card dark:bg-dark-background-card',
            },
        }">
        <div class="flex flex-col justify-center items-center">
            <NuxtImg alt="card-img" class="cursor-pointer" 
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6533/6533554cv11d.jpg;maxHeight=240;maxWidth=240" />
            <div class="flex flex-col pt-4 gap-2">
                <a class="cursor-pointer text-center py-2">Alexzander Corner Sofa</a>
                <h2>135,000.00 Tk.</h2>
                <p class="currency-strike text-center">86,000.00 Tk.</p>
            </div>
        </div>
        </UCard>
        <UCard class="card card-1 ratio-4-3 p-4" :ui="{
            body: {
                padding: 'px-0 py-0 sm:p-0',
                background: 'bg-light-background-card dark:bg-dark-background-card',
            },
        }">
        <div class="flex flex-col justify-center items-center">
            <NuxtImg alt="card-img" class="cursor-pointer" 
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/ed0cfc76-5b94-4e84-af82-a3cc7cff60e4.jpg;maxHeight=240;maxWidth=240" />
            <div class="flex flex-col pt-4 gap-2">
                <a class="cursor-pointer text-center py-2">Alexzander Corner Sofa</a>
                <h2>135,000.00 Tk.</h2>
                <p class="currency-strike text-center">86,000.00 Tk.</p>
            </div>
        </div>
        </UCard>

    </div>
</template>

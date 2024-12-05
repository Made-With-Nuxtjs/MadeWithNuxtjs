<script setup lang="ts">
const is_rightSidebar = rightSidebarExpand()

const openRightSidebar = ref(true)
const rightSidebar = ref(false)

// Function to handle hover
function when_is_hover() {
    rightSidebar.value = true;
    openRightSidebar.value = false;
}

// Function to handle mouse leave
function when_is_not_hover() {
    rightSidebar.value = false;
    openRightSidebar.value = true;
}

interface MenuItem {
    label: string;
    url: string;
    icon?: string;
    isOpen: boolean;
    children?: SubMenuItem[];
}

interface SubMenuItem {
    label: string;
    url: string;
    isStarred: boolean;
}

const menuItems = ref<MenuItem[]>([
    { label: "Dashboard", icon: "material-symbols-light:dashboard", isOpen: false, url: "/" },
    {
        label: "Typography",
        icon: "material-symbols-light:type-specimen-outline-rounded",
        isOpen: false,
        url: "/typography"
    },
    {
        label: "Cards",
        icon: "material-symbols-light:branding-watermark-outline-sharp",
        isOpen: false,
        url: "/cards"
    },
    {
        label: "Carouse",
        icon: "material-symbols-light:view-carousel-sharp",
        isOpen: false,
        url: "/"
    },
    { label: "Restaurant", icon: "material-symbols-light:restaurant", isOpen: false, url: "/" },
    {
        label: "Store",
        icon: "material-symbols-light:store-outline",
        isOpen: false,
        url: "/",
        children: [
            { label: "Raw Material Store", isStarred: false, url: "/" },
            {
                label: "RM Transfer",
                isStarred: false,
                url: "/"
            },
            { label: "RM Requisition", isStarred: false, url: "/" },
            { label: "RM Stock Adjustment", isStarred: true, url: "/" },
            { label: "RM Vouchers", isStarred: true, url: "/" },
            { label: "RM Physical Stock", isStarred: true, url: "/" },
        ],
    },
    { label: "Purchase", icon: "material-symbols-light:box-add-outline-sharp", isOpen: false, url: "/" },
    { label: "Hotel", icon: "material-symbols-light:h-mobiledata-badge-outline-sharp", isOpen: false, url: "/" },
    { label: "R&D", icon: "material-symbols-light:fire-truck-outline-sharp", isOpen: false, url: "/" },

    { label: "R&D", icon: "material-symbols-light:fire-truck-outline-sharp", isOpen: false, url: "/" },
    { label: "R&D", icon: "material-symbols-light:fire-truck-outline-sharp", isOpen: false, url: "/" },
    { label: "R&D", icon: "material-symbols-light:fire-truck-outline-sharp", isOpen: false, url: "/" },
    { label: "R&D", icon: "material-symbols-light:fire-truck-outline-sharp", isOpen: false, url: "/" },
    { label: "R&D", icon: "material-symbols-light:fire-truck-outline-sharp", isOpen: false, url: "/" },
    { label: "R&D", icon: "material-symbols-light:fire-truck-outline-sharp", isOpen: false, url: "/" },
    { label: "R&D", icon: "material-symbols-light:fire-truck-outline-sharp", isOpen: false, url: "/" },
    { label: "R&D", icon: "material-symbols-light:fire-truck-outline-sharp", isOpen: false, url: "/" },
    { label: "R&D", icon: "material-symbols-light:fire-truck-outline-sharp", isOpen: false, url: "/" },
    { label: "R&D", icon: "material-symbols-light:fire-truck-outline-sharp", isOpen: false, url: "/" },
    { label: "R&D", icon: "material-symbols-light:fire-truck-outline-sharp", isOpen: false, url: "/" },
    { label: "R&D", icon: "material-symbols-light:fire-truck-outline-sharp", isOpen: false, url: "/" },
    { label: "R&D", icon: "material-symbols-light:fire-truck-outline-sharp", isOpen: false, url: "/" },
    { label: "R&D", icon: "material-symbols-light:fire-truck-outline-sharp", isOpen: false, url: "/" },
    { label: "R&D", icon: "material-symbols-light:fire-truck-outline-sharp", isOpen: false, url: "/" },
    { label: "R&D", icon: "material-symbols-light:fire-truck-outline-sharp", isOpen: false, url: "/" },
    { label: "R&D", icon: "material-symbols-light:fire-truck-outline-sharp", isOpen: false, url: "/" },
    { label: "R&D", icon: "material-symbols-light:fire-truck-outline-sharp", isOpen: false, url: "/" },
    { label: "R&D", icon: "material-symbols-light:fire-truck-outline-sharp", isOpen: false, url: "/" },
    { label: "R&D", icon: "material-symbols-light:fire-truck-outline-sharp", isOpen: false, url: "/" },
]);

const toggleSubmenu = (item: MenuItem) => {
    item.isOpen = !item.isOpen;
};



// On Scroll
const isHeaderVisible = ref(true); // Header visibility state
let lastScrollTop = 0; // Keeps track of the last scroll position
let windowHeight = 0;
let documentHeight = 0;

function handleScroll() {
    const currentScrollTop = window.scrollY; // Current vertical scroll position
    const scrollBottom = currentScrollTop + windowHeight;

    // Header logic:
    // - Show on scrolling down
    // - Hide on scrolling up
    // - Always show when scrollTop = 0
    if (currentScrollTop <= 0) {
        isHeaderVisible.value = true; // At the top, show header
    } else if (currentScrollTop > lastScrollTop) {
        isHeaderVisible.value = true; // Scrolling down, show header
    } else {
        isHeaderVisible.value = false; // Scrolling up, hide header
    }

    lastScrollTop = currentScrollTop; // Update last scroll position
}

onMounted(() => {
    windowHeight = window.innerHeight; // Set the height of the viewport
    documentHeight = document.body.scrollHeight; // Set the height of the document
    window.addEventListener('scroll', handleScroll); // Add scroll listener
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll); // Remove scroll listener
});

</script>

<template>
    <aside @mouseenter="when_is_hover" @mouseleave="when_is_not_hover" :class="[
        isHeaderVisible ? 'top-[72px] lg:top-[92px] xl:top-[92px]' : 'top-0 transition-all duration-150 ease-in-out',
        rightSidebar ? 'w-64' : 'w-16',
        is_rightSidebar ? 'w-64 flex flex-col transition-all duration-300 ease-in-out' : 'w-16 hidden',
        'fixed md:flex lg:flex xl:flex flex-col justify-between right-0 z-40 h-screen transition-all duration-150 ease-in-out bg-light-background-secondary border-gray-200 dark:bg-dark-background-secondary overflow-hidden'
    ]" aria-label="Sidebar">
        <div class="py-1 overflow-auto h-full scrollbar-custom">
            <ul class="space-y-2 p-3">
                <li v-for="item in menuItems" :key="item.label" class="group pt-1">
                    <div class="flex justify-between items-center p-1 text-gray-900 rounded-lg dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        @click="toggleSubmenu(item)">
                        <ULink :to="item.url">
                            <div class="flex items-center gap-3">
                                <UIcon :name="item.icon ?? 'material-symbols-light:dashboard'" class="text-[28px]" />
                                <span :class="item.children ? 'w-36' : 'w-48'" class="transition-all duration-700 px-2">
                                    {{ item.label }}
                                </span>
                            </div>
                        </ULink>
                        <UIcon v-if="item.children" name="material-symbols-light:keyboard-arrow-up" :class="{
                            'rotate-180': item.isOpen,
                            'rotate-0': !item.isOpen,
                        }" />
                    </div>
                    <!-- Submenu -->
                    <ul v-if="item.isOpen" class="space-y-2 ml-2 lg:ml-5 xl:ml-6 mt-2 text-gray-900 dark:text-gray-200">
                        <li v-for="subItem in item.children" :key="subItem.label"
                            class="flex items-center justify-between p-2 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <div class="flex items-center gap-1 lg:gap-3 xl:gap-2">
                                <UIcon class="dark:bg-gray-100" name="material-symbols-light:line-start-rounded" />
                                <span class="text-[13px] lg:text-[14px] xl:text-[14px]">
                                    {{ subItem.label }}
                                </span>
                            </div>
                            <UIcon v-if="subItem.isStarred" name="material-symbols-light:kid-star"
                                class="text-yellow-900 dark:text-yellow-500 text-[12px] lg:text-[12px] xl:text-[12px]" />
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div :class="isHeaderVisible ? 'pb-20 sm:pb-24 md:pb-24 lg:pb-24 xl:pb-24' : 'pb-2'">
            <UDivider />
            <div class="pl-3 pt-3 pb-1">
                <ColorMode />
            </div>
        </div>
    </aside>

</template>
<style scoped>
/* Light theme styles */
.scrollbar-custom::-webkit-scrollbar {
    width: 5px;
}

.scrollbar-custom::-webkit-scrollbar-track {
    background: #d1d5db;
    /* Light gray background */
}

.scrollbar-custom::-webkit-scrollbar-thumb {
    background-color: #c5c9cedc;
    /* Tailwind's gray-400 */
    border-radius: 3px;
    border: none;

}

.scrollbar-custom::-webkit-scrollbar-thumb:hover {
    background-color: #c2c2c2;
    /* Tailwind's gray-600 */
}

/* Dark theme styles */
.dark .scrollbar-custom::-webkit-scrollbar-track {
    background: #4b5563;
    /* Tailwind's gray-700 */
}

.dark .scrollbar-custom::-webkit-scrollbar-thumb {
    background-color: #3d4652e7;
    /* Tailwind's gray-600 */
}

.dark .scrollbar-custom::-webkit-scrollbar-thumb:hover {
    background-color: #888888;
    /* Tailwind's gray-800 */
    border-radius: 3px;
    border: none;
}
</style>
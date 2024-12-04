<template>
  <div>
    <Header />
    <LeftSidebar />
    <RightSidebar />
    <UContainer :ui="{
      base: 'mx-auto',
      padding: 'p-4 sm:p-6 md:p-20 lg:p-20 xl:p-20',
      constrained: 'max-w-8xl'
    }">
      <slot />
    </UContainer>
    <Footer />
  </div>
</template>
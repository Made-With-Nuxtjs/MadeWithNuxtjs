<template>
  <div>
    <Header />
    <LeftSidebar />
    <RightSidebar />
    <UContainer :ui="{
      base: 'mx-auto',
      padding: 'p-4 sm:px-6 md:px-20 lg:px-8 xl:px-20',
      constrained: 'max-w-8xl'
    }">
      <slot />
    </UContainer>
    <Footer />
  </div>
</template>
<template>
  <div class="defaultLayout">
    <a class="visually-hidden" href="#main">Skip to content</a>

    <div id="wrapper" class="wrapper pb-16 md:pb-0 flex flex-col relative min-h-screen w-full">
      <HeaderPartial />

      <!-- I don't like that I can't apply classes to Layout & have to do it here... -->
      <main id="main" class="inner flex flex-1 flex-wrap py-5 lg:py-10">
        <slot />
      </main>
    </div>

    <ClientOnly>
      <ResponsiveNav /> <!-- TODO figure out wtf this is -->
    </ClientOnly>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import HeaderPartial from '~/layouts/partials/Header.vue'
import ResponsiveNav from '~/layouts/partials/ResponsiveNav.vue'

export default {
  components: {
    HeaderPartial,
    ResponsiveNav
  }
}
</script>
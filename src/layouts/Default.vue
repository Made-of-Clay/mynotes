<template>
  <div class="defaultLayout">
    <a class="visually-hidden" href="#main">Skip to content</a>

    <div id="wrapper" class="wrapper pb-16 md:pb-0 flex flex-col relative min-h-screen w-full">
      <HeaderPartial />

      <transition name="fade" appear>
        <!-- I don't like that I can't apply classes to Layout & have to do it here... -->
        <main
          id="main"
          :key="$route.path"
          class="inner py-5 lg:py-10"
          :class="mainFlexClasses"
        >
          <slot />
        </main>
      </transition>
    </div>

    <ClientOnly>
      <ResponsiveNav />
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
  },

  computed: {
    mainFlexClasses: vm => vm.$route.path !== '/' ? 'flex flex-1 flex-wrap' : '',
  },
}
</script>

<style>
.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}
</style>
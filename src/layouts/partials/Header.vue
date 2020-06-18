<template>
  <header
    id="header"
    class="header bg-purple-900 flex flex-col md:flex-row md:justify-between items-center p-4 md:p-6"
    role="banner"
  >
    <g-link
      class="company-logo-link block text-white font-bold text-2xl md:text-3xl hover:text-pink-500"
      to="/"
      aria-label="Back to home"
    >
      {{ $static.metadata.siteName }}
    </g-link>

    <nav id="nav" class="nav hidden md:flex">
      <ul class="menu flex flex-col md:flex-row items-center list-reset text-base">
        <li
          v-for="element in $static.metadata.menu"
          :key="element.name"
          class="mb-4 md:mr-4 md:mb-0"
        >
          <g-link
            :to="element.link"
            class="font-bold text-white hover:text-pink-600"
            :class="buildDynamicClasses(element.name)"
            exact-active-class="text-pink-500"
          >
            {{ element.name }}
          </g-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    category() {
      let title;
      if (this.$page) {
        const { category, note } = this.$page;
        if (category) {
          title = category.title;
        } else if (note && note.category) {
          title = note.category.title;
        }
      }
      return title || '';
    },
  },

  methods: {
    buildDynamicClasses(linkName) {
      if (linkName.toLowerCase() === this.category.toLowerCase()) {
        return 'text-pink-500'
      }
    },
  }
};
</script>

<static-query>
query {
  metadata {
    siteName
    menu {
      name
      link
    }
  }
}
</static-query>

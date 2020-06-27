<template>
  <aside class="sidebarOutline">
    <ul>
      <li v-for="item in orderedNotes" :key="item.id">
        <g-link :to="item.path">
          <h1
            class="text-xl border-gray-300 border-t text-gray-500 hover:text-purple-800 transition-colors duration-200"
            :class="currentClass(item.path)"
            v-html="item.title.replace('\\', '')"
          />
        </g-link>
        <!-- TODO consider toggling non-h1 tags depending on which page/content is focused (don't show others' heading links unless toggled) -->
        <ul v-if="item.headings.length">
          <li v-for="subheading in item.headings" :key="`${item.id}${subheading.anchor}`">
            <g-link :to="`${item.path}${subheading.anchor}`">
              <component
                :is="`h${subheading.depth}`"
                class="text-gray-500 hover:text-purple-800 transition-colors duration-200"
                :class="`ml-${subheading.depth*2}`"
                v-text="subheading.value"
              />
            </g-link>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
import orderedNotes from '~/mixins/orderedNotes.mixin.js';

export default {
  mixins: [
    orderedNotes,
  ],

  data: () => ({
    orderedNotesIncludesH1: false,
  }),
  computed: {
    category: vm => vm.$page.note.category.title,
    allNotes: vm => vm.$page.allNote.edges || [],
  },

  methods: {
    currentClass(path) {
      if (path === this.$page.note.path) {
        return 'text-primary';
      }
    },
  },
}
</script>

<style lang="scss">
.sidebarOutline {
  h4 {
    @apply text-sm;
  }
}
</style>
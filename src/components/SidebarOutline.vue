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
    // outline() {
    //   let outline = [];
    //   if (this.$page.allNote && this.$page.allNote.edges.length) {
    //     outline = this.$page.allNote.edges.reduce((accum, { node }) => {
    //       if (node.category && node.category.title === this.category) {
    //         accum.push(Object.assign({}, node, {
    //           headings: (node.headings || []).filter(heading => heading.depth > 1)
    //         }));
    //       }
    //       return accum;
    //     }, []);
    //   }
    //   return outline;
    // },
    // order: vm => vm.$page && vm.$page.note ? noteOrders[vm.$page.note.category.title] : [],
    // orderedNotes: vm => vm.$page.allNote.edges.reduce((notes, { node: note }) => {
    //   const index = vm.order.indexOf(note.fileInfo.name);
    //   notes[index] = note;
    //   return notes;
    // }, []),
  },

  methods: {
    currentClass(path) {
      if (path === this.$page.note.path) {
        return 'text-purple-900';
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
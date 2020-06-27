<template>
  <Layout>
    <section id="container-centre" class="column centre flex-1">
      <h1
        class="page-title text-primary md:text-center mb-16"
        v-text="$page.category.title"
      />
      <ul class="categoryNotes mx-auto text-center">
        <li
          v-for="note in orderedNotes"
          :key="note.id"
          class="text-gray-500 mb-4 border-b border-gray-200"
        >
          <g-link
            :to="note.path"
            class="block text-secondary hover:text-primary"
          >
            {{ note.title | stripSlashes }}
          </g-link>
        </li>
      </ul>
    </section>
  </Layout>
</template>

<page-query>
  query($id: ID!) {
    category(id: $id) {
      title
      belongsTo {
        edges {
          node {
            ... on Note {
              id
              title
              path
              fileInfo {
                name
              }
            }
          }
        }
      }
    }
  }
</page-query>

<script>
import orderedNotes from '~/mixins/orderedNotes.mixin.js';

// in hindsight, this ordering of categories isn't super important, but oh well
export default {
  metaInfo: vm => ({
    title: vm.$page.category.title,
  }),

  filters: {
    stripSlashes: str => str.replace(/\\/, ''),
  },

  mixins: [
    orderedNotes,
  ],

  data: () => ({
    orderedNotesIncludesH1: true,
  }),
  computed: {
    category: vm => vm.$page.category.title,
    allNotes: vm => vm.$page.category.belongsTo.edges || [],
  },
};
</script>

<style>
.categoryNotes {
  max-width: 200px;
}
</style>
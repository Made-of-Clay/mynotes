<template>
  <Layout>
    <section id="container-centre" class="column centre flex-1">
      <h1
        class="page-title text-purple-900 md:text-center mb-16"
        v-text="$page.category.title"
      />
      <ul class="categoryNotes">
        <li
          v-for="note in orderedNotes"
          :key="note.id"
          class="text-gray-500 mb-4 border-b border-gray-200"
        >
          <g-link
            :to="note.path"
            class="block text-pink-500 hover:text-purple-900"
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
import noteOrders from '~/order'; // this is not my ideal way, but querying each category and keeping up to date isn't either... might learn better way

export default {
  metaInfo: vm => ({
    title: vm.$page.category.title,
  }),

  filters: {
    stripSlashes: str => str.replace(/\\/, ''),
  },

  computed: {
    order: vm => vm.$page && vm.$page.category ? noteOrders[vm.$page.category.title] : [],
    orderedNotes: vm => vm.$page.category.belongsTo.edges.reduce((notes, { node: note }) => {
      const index = vm.order.indexOf(note.fileInfo.name);
      notes[index] = note;
      return notes;
    }, []),
  },
};
</script>

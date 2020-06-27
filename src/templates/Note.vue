<template>
  <Layout class="flex">
    <SidebarOutline class="w-full sm:w-1/3 md:w-1/4" />
    <article id="note-template" class="w-full sm:w-2/3 md:w-3/4 noteTemplate">
      <figure v-if="$page.note.image" class="my-10 md:my-20">
        <g-image :alt="$page.note.image_caption || ''" :src="$page.note.image" />
        <figcaption
          v-if="$page.note.image_caption"
          class="text-center text-sm italic text-gray-600 mt-4"
          v-text="$page.note.image_caption"
        />
      </figure>

      <div class="content post md:px-16">
        <p v-if="$page.note.excerpt" v-html="$page.note.excerpt" />
        <div v-html="$page.note.content" />
        <ul v-if="$page.note.tags" class="flex pt-8 border-t border-gray-100">
          <li v-for="tag in $page.note.tags" :key="tag.id" class="mr-2">
            <g-link
              :to="tag.path"
              class="inline-block border border-green-300 px-4 py-2 text-secondary text-xs font-semibold rounded hover:text-white hover:bg-secondary hover:border-secondary"
            >
              {{tag.title}}
            </g-link>
          </li>
        </ul>
      </div>
    </article>
  </Layout>
</template>

<page-query>
  query($id: ID!) {
    note(id: $id) {
      title
      path
      image(width:1200)
      # image_caption
      excerpt
      content
      category {
        title
        path
      }
      tags {
        id
        title
        path
      }
    }
    # following data used for SidebarOutline
    allNote {
      edges {
        node {
          id
          title
          path
          fileInfo {
            name
          }
          category {
            title
          }
          headings {
            depth
            value
            anchor
          }
        }
      }
    }
  }
</page-query>

<script>
import SidebarOutline from '~/components/SidebarOutline';

export default {
  metaInfo() {
    return {
      title: this.$page.note.title
    };
  },

  components: {
    SidebarOutline,
  },
};
</script>

<style lang="scss">
.noteTemplate {
  h1 {
    @apply text-4xl;
  }
  h2 {
    @apply text-2xl;
  }
  h3 {
    @apply text-xl;
  }
  h4 {
    @apply text-lg;
  }
  h5 {
    @apply text-gray-700;
  }
}
</style>
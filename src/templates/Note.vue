<template>
  <Layout>
    <section id="note-template" class="column centre flex-1">
      <div class="post-header mb-12 md:mb-20">
        <h1
          class="page-title text-3xl md:text-center md:text-5xl lg:text-6xl"
          v-html="$page.note.title"
        />
        <div v-if="$page.note.category" class="text-sm md:text-base text-gray-600 flex justify-center">
          <p class="px-2">—</p>
          <p class="category">
            Posted in
            <g-link :to="$page.note.category.path">{{ $page.note.category.title }}</g-link>
          </p>
        </div>
        <figure v-if="$page.note.image" class="mt-10 md:mt-20">
          <g-image :alt="$page.note.image_caption" :src="$page.note.image" />
          <figcaption
            class="text-center text-sm italic text-gray-600 mt-4"
          >{{ $page.note.image_caption }}</figcaption>
        </figure>
      </div>

      <div class="content post md:px-16">
        <p v-html="$page.note.excerpt" />
        <div v-html="$page.note.content" />
        <ul v-if="$page.note.tags" class="flex pt-8 border-t border-gray-100">
          <li v-for="tag in $page.note.tags" :key="tag.id" class="mr-2">
            <g-link
              :to="tag.path"
              class="inline-block border border-pink-300 px-4 py-2 text-pink-500 text-xs font-semibold rounded hover:text-white hover:bg-pink-500 hover:border-pink-500"
            >
              {{tag.title}}
            </g-link>
          </li>
        </ul>
      </div>
    </section>
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
  }
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.note.title
    };
  }
};
</script>

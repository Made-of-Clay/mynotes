<template>
  <div>
    <input v-model="search" :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  props: {
    search: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Search…',
    },
  },

  computed: {
    searchResults: vm => vm.search.length < 3 ? [] : vm.$search.search({
      query: vm.search,
      limit: 5
    }),
  },
}
</script>
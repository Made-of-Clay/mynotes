<template>
  <Layout>
    <article id="container-centre" class="column centre flex-1">
      <h1 class="page-title">My (Adam) Notes</h1>
      <p>This site is a collection of notes I have assembled for the sake of accomplishing the following:</p>
      <ol>
        <li>To make my notes accessible from the internet for my own convenience</li>
        <li>To practice using Gridsome</li>
        <li>To practice using Tailwind</li>
        <li>To practice using GraphQL</li>
        <li>To practice building a static site and all that entails (the process, services like Netlify, etc...)</li>
      </ol>
    </article>

    <footer class="mt-10">
      <h2>Starter Credits</h2>
      <p>
        This template was built for <a href="https://www.11ty.dev/docs/">Eleventy</a>
        by <a href="https://github.com/josephdyer"> Joseph Dyer</a>.
        It is a <a href="https://www.gridsome.org">Gridsome</a> starter
        built with <a href="https://tailwindcss.com">TailwindCSS</a>.
      </p>
    </footer>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
};
</script>

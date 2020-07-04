// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import '~/resources/scss/main.scss'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  // Add attributes to HTML tag
  head.htmlAttrs = { lang: 'en', class: 'min-h-full antialiased' }
  // Add attributes to BODY tag
  head.bodyAttrs = { class: 'text-primary leading-normal' }
}

// TODO add search to header and large search to main page
// TODO commit, do 1st prod build (to see), add to netlify and deploy!
// TODO add notes/highlights from Rule #1 for first entries
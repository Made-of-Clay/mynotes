module.exports = {
  siteName: 'My Notes',

  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true,
        shouldPurgeUnusedKeyframes: true,
      }
    },
    {
      use: 'gridsome-source-static-meta',
      options: {
        path: 'settings/*.json'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Note',
        path: `./content/**/*.md`,
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          },
          category: {
            typeName: 'Category',
            create: true
          }
        }
      }
    },
    // {
    //   use: 'gridsome-plugin-flexsearch',
    //   options: {
    //     searchFields: ['title'],
    //     collections: [
    //       {
    //         typeName: 'Note',
    //         indexName: 'Note',
    //         fields: ['title']
    //       }
    //     ]
    //   }
    // }
  ],
  templates: {
    // append Category and Tag to types and build templates from them
    // ...([...types, 'Category', 'Tag'].reduce((templates, type) => {
      // templates[type] = [{
        // path: `/${type.toLowerCase()}/:title`,
        // component: `./src/templates/${type}.vue`,
      // }];
      // return templates;
    // }, {})),
    Note: [{
      path: '/note/:title',
      component: './src/templates/Note.vue'
    }],
    Category: [{
      path: '/category/:title',
      component: './src/templates/Category.vue'
    }],
    Tag: [{
      path: '/tag/:title',
      component: './src/templates/Tag.vue'
    }]
  },
  chainWebpack: config => {
    config.resolve.alias.set('@modules', '@/resources/js/modules');
    config.resolve.alias.set('@utilities', '@/resources/js/utilities');
  }
}

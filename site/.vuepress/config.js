const path = require('path');
const fs = require('fs');
const tailwind = require('tailwindcss');

const capitalizeString = str => String(str)[0].toUpperCase() + String(str).substr(1);

const dirItems = fs.readdirSync(path.resolve(__dirname, '..'));
const nav = dirItems.reduce((nav, dirItem) => {
    const isFile = /\.md$/.test(dirItem);
    const shouldIgnore = ['.vuepress'].includes(dirItem);
    if (!isFile && !shouldIgnore) {
        nav.push({
            text: capitalizeString(dirItem),
            link: `/${dirItem}/`
        });
    }
    return nav;
}, [{ text: 'Home', link: '/' }]);

const conditionalPlugins = process.env.NODE_ENV === 'production'
    ? [
        require('autoprefixer'),
        require('cssnano')({
            preset: 'default',
        }),
        require('@fullhuman/postcss-purgecss')({
            content: ['./site/.vuepress/**/*.vue'],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        }),
    ]
    : [];

module.exports = {
    title: 'My Notes',
    description: "Simply a static site for the various notes I want to take on interesting topics (i.e. books I read, philosophy I'm studying, etc)",
    themeConfig: {
        nav,
        sidebarDepth: 2,
        sidebar: {
            '/apologetics/': [
                '',
                'truth',
            ],
            '/investing/': [
                '',
                'rule1',
            ],
        },
        // searchPlaceholder: 'Search...',
    },
    postcss: {
        plugins: [
            require('postcss-import'),
            tailwind(path.resolve(__dirname, 'tailwind.config.js')),
            ...conditionalPlugins,
        ],
    },
};
<template>
    <blockquote>
        <slot />
        <span class="pullQuote__who" :class="whoClasses">
            <slot v-slot:who />
        </span>
    </blockquote>
</template>

<script>
export default {
    props: {
        direction: {
            type: String,
            default: 'right',
            validator: value => ['right', 'left', 'center'].includes(value.toLowerCase()),
        },
    },

    computed: {
        whoClasses: vm => `pullQuote__who--${vm.direction}`,
    },
};
</script>

<style>
.pullQuote__who {
    float: right;
}
</style>
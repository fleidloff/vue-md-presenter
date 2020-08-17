<template>
    <div>
        <slot />
    </div>
</template>

<script>
export default {
    data() {
        return {
            fullscreen: false,
        };
    },
    methods: {
        toggleFullscreen() {
            this.fullscreen = !this.fullscreen;
            this.$el.requestFullscreen();
        },
    },
    mounted() {
        if (!document.fullscreenEnabled) return;

        this.$emit('fullscreen-ready', this.toggleFullscreen);
    },
};
</script>

<style scoped></style>

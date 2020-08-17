<template>
    <div v-if="fullscreen">
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
        requestFullscreen() {
            this.fullscreen = true;
            setTimeout(() => this.$el.requestFullscreen(), 0);
        },
        onFullscreenChange() {
            if (document.fullscreenElement) {
                this.fullscreen = true;
            } else {
                this.fullscreen = false;
            }
        },
    },
    mounted() {
        if (!document.fullscreenEnabled) return;
        document.addEventListener('fullscreenchange', this.onFullscreenChange);
        this.$emit('fullscreen-ready', this.requestFullscreen);
    },
    unmounted() {
        document.removeEventListener(
            'fullscreenchange',
            this.onFullscreenChange,
        );
    },
};
</script>

<style scoped>
:fullscreen {
    background: white;
    padding: 100px;
}
</style>

<template>
    <div class="markdown">
        <transition name="slide-fade" mode="out-in">
            <div :key="page" v-html="content" />
        </transition>
    </div>
    <div class="markdown-pagination">
        <button v-on:click="updatePage(-1)">-</button>
        <span>page: {{ currentPage }} / {{ numPages }}</span>
        <button v-on:click="updatePage(+1)">+</button>
        <arrow-handler v-bind:update="updatePage" />
    </div>
    <fullscreen v-on:fullscreen-ready="onFullscreenReady">
        <transition name="slide-fade" mode="out-in">
            <div :key="page" v-html="content" />
        </transition>
    </fullscreen>
    <button v-if="requestFullscreen" v-on:click="requestFullscreen">
        enter fullscreen
    </button>
</template>

<script>
import { markdown } from 'markdown';
import arrowHandler from './arrowHandler';

export default {
    components: {
        'arrow-handler': arrowHandler,
    },
    data() {
        return {
            page: 1,
            requestFullscreen: null,
        };
    },
    methods: {
        updatePage(update) {
            this.page = this.currentPage + update;
        },
        onFullscreenReady(requestFullscreen) {
            this.requestFullscreen = requestFullscreen;
        },
    },
    computed: {
        splitContent() {
            return this.$store.state.content.split('---');
        },
        content() {
            // todo: debounce markdown rendering (with local state?)
            return markdown.toHTML(this.splitContent[this.currentPage - 1]);
        },
        numPages() {
            return this.splitContent.length;
        },
        currentPage() {
            if (this.page < 1) {
                return 1;
            }
            if (this.page > this.numPages) {
                return this.numPages;
            }

            return this.page;
        },
    },
};
</script>

<style scoped>
.markdown {
    margin-top: 20px;
    border: 1px solid rgb(89, 90, 88);
    border-top: 5px solid black;
    padding: 10px;
}
.markdown-pagination button {
    margin: 10px;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.3s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
    opacity: 0;
}
</style>

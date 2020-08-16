<template>
    <div class="markdown" v-html="content" />
    <button v-on:click="updatePage(-1)">-</button>
    <span>page: {{ currentPage }} / {{ numPages }}</span>
    <button v-on:click="updatePage(+1)">+</button>
</template>

<script>
import { markdown } from 'markdown';
export default {
    data() {
        return {
            page: 1,
        };
    },
    mounted() {
        window.addEventListener('keydown', this.onKeyPress);
    },
    unmounted() {
        window.removeEventListener('keydown', this.onKeyPress);
    },
    methods: {
        updatePage(update) {
            this.page = this.currentPage + update;
        },
        // todo: Composition API for keyboard stuff
        onKeyPress(ev) {
            switch (ev.key) {
                default:
                    break;
                case 'ArrowLeft':
                    this.updatePage(-1);
                    break;
                case 'ArrowRight':
                    this.updatePage(1);
                    break;
            }
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
</style>

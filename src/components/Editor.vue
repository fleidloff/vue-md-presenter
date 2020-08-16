<template>
    <div class="editor">
        <textarea cols="30" rows="10" v-model="content" />
        <div>content length: {{ contentLength }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    computed: {
        content: {
            get() {
                return this.$store.state.content;
            },
            set(value) {
                return this.$store.commit('changeContent', value);
            },
        },
        contentLength() {
            return this.$store.state.content.length;
        },
    },
};
</script>

<style scoped>
.editor textarea {
    border-color: rgb(89, 90, 88);
    border-top: 5px solid black;
    padding: 10px;
}
</style>

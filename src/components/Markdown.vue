<template>
    <div class="markdown">{{ content }}</div>
</template>

<script>
export default {
    computed: {
        content() {
            return this.$store.state.content;
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

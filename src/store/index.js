import { createStore } from 'vuex';

export default createStore({
    state: {
        content: 'Hello, Vuex',
    },
    mutations: {
        changeContent(state, content) {
            state.content = content;
        },
    },
    actions: {
        changeContent(context, content) {
            context.commit('changeContent', content);
        },
    },
    modules: {},
});

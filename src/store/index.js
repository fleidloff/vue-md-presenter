import { createStore } from 'vuex';
//import debounce from 'lodash/debounce';

export default createStore({
    state: {
        content: `
Hello, Vuex
---
PAGE 2
---
PAGE 3
`,
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

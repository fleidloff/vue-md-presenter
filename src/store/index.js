import { createStore } from 'vuex';
//import debounce from 'lodash/debounce';

export default createStore({
    state: {
        content: `

# Hello, Vue World

this is a simple markdown presentation thingy
---
# It's just a proof of concept

I wanted to learn vuejs and thought this was a cool little project.  
If you don't like the design, please note: *there is no design, yet!*
---
# Pages
Pages can be split using three dashes
---
# Lists
* Lists
* are 
* supported
---
# Like everything else markdown
---
# Todos
*this list is uncomplete, just ideas*

* some way to include graphs
* nice tables
* giphy?
* images
* progress indicator
* styling
        
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

import { createApp } from 'vue';
import App from './App.vue';
import Editor from './components/Editor';
import Markdown from './components/Markdown';
import store from './store';

const app = createApp(App).use(store);

app.component('editor', Editor);
app.component('markdown', Markdown);

app.mount('#app');

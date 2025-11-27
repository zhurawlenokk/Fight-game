import AppComponent from './App.vue';
import { createApp, type App } from 'vue';
import router from './router';

import './styles/style.scss';

function createVueApp() {
    return createApp(AppComponent);
}

function addPluginsApp(app: App): App {
    return app.use(router);
}

function mountApp(app: App): void {
    app.mount('#app');
}

const app = createVueApp();
const appPlugins = addPluginsApp(app);
mountApp(appPlugins);

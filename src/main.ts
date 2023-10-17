// Importe la fonction createApp de Vue 3
import { createApp } from 'vue';

// Importe le framework UI Element Plus
import ElementPlus from 'element-plus';

// Importe les fichiers CSS de styles d'Element Plus
import 'element-plus/theme-chalk/src/index.scss';
import 'element-plus/theme-chalk/src/display.scss';

// Importe le composant racine de l'application (App.vue)
import App from './App.vue';

// Importe le routeur de l'application
import router from './router';

// Importe le store (gestionnaire d'état) de l'application
import store from './store';

// Crée une instance d'application Vue
const app = createApp(App);

// Utilise le framework Element Plus dans l'application
app.use(ElementPlus);

// Utilise le store (gestionnaire d'état) dans l'application
app.use(store);

// Utilise le routeur dans l'application
app.use(router);

// Montre l'application dans l'élément DOM avec l'ID "app"
app.mount('#app');

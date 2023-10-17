import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LoginView from "../views/LoginView.vue"; // Import du composant de vue pour la page de connexion
import EnigmesView from "../views/EnigmesView.vue"; // Import du composant de vue pour la page des enigmes

// Définition des routes de l'application
const routes: Array<RouteRecordRaw> = [
  {
    path: "/", // Chemin d'accès pour la page login
    name: "login", // Nom de la route
    component: LoginView, // Composant associé à la route (page de connexion)
  },
  {
    path: "/enigmes", // Chemin d'accès pour la page enigmes
    name: "enigmes", // Nom de la route
    component: EnigmesView, // Composant associé à la route (page des énigmes)
  },
];

// Création du routeur avec configuration
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // Gestion de l'historique de navigation
  routes, // Liste des routes définies ci-dessus
});

export default router;

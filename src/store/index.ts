import { createStore } from "vuex";

export default createStore({
  state: {
    // État de l'application
    enigmes: [
      // Tableau d'énigmes
      {
        id: 1,
        question: "Je suis grand comme un homme, mais je n'ai ni bras ni jambes. Qui suis-je ?",
        reponse: "pantalon",
      },
      {
        id: 2,
        question: "Je suis l'élément le plus fort de la Terre, mais je ne peux pas être vu. Qui suis-je ?",
        reponse: "air",
      },
      {
        id: 3,
        question: "Je suis un endroit où vous vous reposez, prenez des douches, et où vous cuisinez. Où suis-je ?",
        reponse: "maison",
      },
    ],
  },
  getters: {
    // Getters pour accéder aux données de l'état
    getAllEnigmes: (state) => state.enigmes, // Renvoie la liste complète des énigmes
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});

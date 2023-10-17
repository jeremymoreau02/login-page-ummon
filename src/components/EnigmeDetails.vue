<template>
  <!-- Contenu de la vue -->
  <div>
    <h2>Énigme à résoudre pour le mot de passe : (un mot)</h2> <!-- Titre de la vue -->
    <div v-if="enigme">
      <strong>Question:</strong> {{ enigme.question }} <!-- Affiche la question de l'énigme -->
    </div>
    <div v-else>
      <p>Énigme non trouvée.</p> <!-- Affiche un message si l'énigme n'est pas trouvée -->
    </div>
    <div>
      <router-link to="/enigmes">Voir les réponses</router-link> <!-- Lien pour voir les réponses des énigmes -->
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { Enigme } from '../types/Enigme'; // Importe le modèle d'énigme
  
  export default defineComponent({
    props: {
      enigme: {
        type: Object as () => Enigme | null, // Propriété enigme de type Enigme ou null
        required: true, // Obligatoire
      },
    }
  });
</script>

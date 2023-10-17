<template>
  <!-- Titre de la page des énigmes -->
  <h2>Énigmes</h2>
  <!-- Carte Element UI pour afficher les énigmes -->
  <el-card class="enigmes-card">
    <el-row>
      <!-- Boucle sur les énigmes et affichage de chaque énigme -->
      <el-col :span="24" v-for="enigme in enigmes" :key="enigme.id">
        <el-card class="enigme-card">
          <!-- Section de la question de l'énigme -->
          <div class="enigme-question">
            <strong>Question:</strong> {{ enigme.question }}
          </div>
          <!-- Section de la réponse de l'énigme -->
          <div class="enigme-reponse">
            <strong>Réponse:</strong> {{ enigme.reponse }}
          </div>
        </el-card>
      </el-col>
    </el-row>
  </el-card>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useStore } from 'vuex';
  import { Enigme } from '../types/Enigme';

  export default defineComponent({
    computed: {
      // Récupère la liste des énigmes depuis le store
      enigmes(): Enigme[]  {
        const store = useStore()
        return store.getters.getAllEnigmes;
      },
    },
  });
</script>

<style scoped>
  /* Styles de la carte des énigmes */
  .enigmes-card {
    margin: 20px;
  }

  /* Styles de chaque carte d'énigme */
  .enigme-card {
    margin: 10px 0;
    padding: 15px;
    background-color: #f4f4f4;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
  }

  /* Styles de la section de la question d'énigme */
  .enigme-question {
    font-weight: bold;
  }

  /* Styles de la section de la réponse d'énigme */
  .enigme-reponse {
    margin-top: 10px;
  }
</style>

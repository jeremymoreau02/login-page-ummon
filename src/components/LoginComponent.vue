<template>
  <div class="container mt-5">
    <el-card>
      <div class="card-body">
        <!-- Affiche les détails de l'énigme -->
        <EnigmeDetails :enigme="enigme" />
        <br />
        <!-- Affiche un message d'erreur en cas d'erreur -->
        <CustomMessage v-if="errorMessage" :message="errorMessage" title="Erreur" type="error" />
        <!-- Affiche un message de bienvenue en cas de succès -->
        <CustomMessage v-if="goodMessage" :message="goodMessage" title="Bienvenue!" type="success" />
        <br />
        <div class="input-fields">
          <!-- Champ de saisie du pseudo -->
          <InputField type="text" label="Pseudo" :value="username" placeholder="Pseudo" @updateValue="updateUsername" />
          <!-- Champ de saisie du mot de passe -->
          <InputField type="password" label="Mot de passe" :value="password" placeholder="Mot de passe" @updateValue="updatePassword" />
        </div>
        <br />
        <!-- Bouton de connexion -->
        <CustomButton label="Login" @click="handleLogin" type="primary" />
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, computed } from 'vue';
  import CustomMessage from './CustomMessage.vue';
  import InputField from './InputField.vue';
  import CustomButton from './CustomButton.vue';
  import EnigmeDetails from './EnigmeDetails.vue';
  import { Enigme } from '../views/EnigmesView.vue';
  import { useStore } from 'vuex';

  export default defineComponent({
    components: {
      CustomMessage,
      InputField,
      CustomButton,
      EnigmeDetails
    },
    setup() {
      // Définition des variables réactives
      const username = ref('');
      const password = ref('');
      const errorMessage = ref('');
      const goodMessage = ref('');

      // Accès au store Vuex
      const store = useStore();
      const enigmes = computed(() => store.getters.getAllEnigmes as Enigme[]);

      // Récupération d'une énigme aléatoire
      const enigme = computed(() => {
        const max = enigmes.value.length;
        return (
          enigmes.value.find((e) => e.id === Math.floor(Math.random() * max) + 1) ||
          enigmes.value.find((e) => e.id === 1) ||
          null
        );
      });

      // Fonction de mise à jour du pseudo
      const updateUsername = (value: string) => {
        username.value = value;
      };

      // Fonction de mise à jour du mot de passe
      const updatePassword = (value: string) => {
        password.value = value;
      };

      // Fonction de gestion de la connexion
      const handleLogin = () => {
        if (username.value === 'user' && password.value === enigme.value?.reponse) {
          goodMessage.value = 'Vous avez trouvé la réponse !';
          errorMessage.value = '';
        } else {
          goodMessage.value = '';
          errorMessage.value = 'Les identifiants de connexions sont invalides. Veuillez réessayer ou voir la réponse à l\'énigme sur la page "Enigmes"';
        }
      };

      // Retourne les variables et fonctions utilisées dans le template
      return {
        username,
        password,
        errorMessage,
        updateUsername,
        updatePassword,
        handleLogin,
        enigme,
        goodMessage
      };
    },
  });
</script>

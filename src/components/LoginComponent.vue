<template>
  <div class="container mt-5">
    <el-card>
      <div class="card-body">
        <!-- Affiche les détails de l'énigme -->
        <EnigmeDetails :enigme="enigme" />
        <br />
        <CustomButton label="Autre énigme" @click="changeEnigme" type="warning" size="small"/>
        <CustomButton label="Afficher la réponse" @click="displayAnswer" type="danger" size="small"/>
        <br />
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
        <CustomButton label="Login" @click="handleLogin" type="primary" size="large"/>
      
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
  import { Enigme } from '../types/Enigme';
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

      
      const currentEnigme = ref(enigme.value);

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

      // Fonction pour changer d'énigme
      const changeEnigme = () => {
        const max = enigmes.value.length;
        const newEnigme =
          enigmes.value.find((e) => e.id === Math.floor(Math.random() * max) + 1) ||
          enigmes.value.find((e) => e.id === 1) ||
          null;
        // Mettre à jour l'énigme actuelle
        currentEnigme.value = newEnigme;
      };

      const displayAnswer = () => {
        if (currentEnigme.value)
          password.value = currentEnigme.value?.reponse;
      }

      // Retourne les variables et fonctions utilisées dans le template
      return {
        username,
        password,
        errorMessage,
        updateUsername,
        updatePassword,
        handleLogin,
        enigme: currentEnigme,
        changeEnigme,
        displayAnswer,
        goodMessage
      };
    },
  });
</script>

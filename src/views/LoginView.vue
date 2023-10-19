<template>
  <!-- Titre de la page de connexion -->
  <h2>Connexion</h2>
  <!-- Conteneur de la page de connexion -->
  <div class="login-view">
    <div class="login-container">
      <!-- Composant de connexion (Login) -->
      <Login data-cy="login-component" />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Login from '../components/LoginComponent.vue';

  export default defineComponent({
    components: {
      Login,
    },
  });
</script>

<style scoped>
  /* Styles de la vue de connexion */
  .login-view {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
  }

  /* Styles du conteneur de la page de connexion */
  .login-container {
    width: 400px;
    padding: 5px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
</style>

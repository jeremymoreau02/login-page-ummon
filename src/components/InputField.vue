<template>
    <el-form-item :label="label">
      <!-- Champs de saisie -->
      <el-input :type="inputType" v-model="inputValue" :placeholder="placeholder" />
      <!-- Case à cocher pour afficher/masquer le mot de passe -->
      <el-checkbox v-if="type === 'password'" v-model="hidePassword" label="Afficher le mot de passe ?" size="large" />
    </el-form-item>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    props: {
      label: String, // Étiquette du champ de saisie
      value: String, // Valeur du champ de saisie
      placeholder: String, // Placeholder du champ de saisie
      type: String, // Type du champ (text ou password)
    },
    data() {
      return {
        inputValue: this.value, // Valeur du champ de saisie
        hidePassword: false, // Indicateur pour masquer ou afficher le mot de passe
      };
    },
    computed: {
      // Détermine le type d'input en fonction du type et de l'état de la case à cocher
      inputType() {
        return this.type === 'password' && !this.hidePassword ? 'password' : 'text';
      },
    },
    watch: {
      // Gère les changements de la valeur du champ de saisie
      value(newVal) {
        this.inputValue = newVal;
      },
      // Émet un événement lorsque la valeur change
      inputValue(newVal) {
        this.$emit('updateValue', newVal);
      },
    },
  });
  </script>
  
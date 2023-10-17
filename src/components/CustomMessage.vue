<template>
    <!-- Contenu de la vue -->
    <el-alert
      v-if="message"
      :title="title"
      :type="type"
      :closable="false"
      :show-icon="true"
    >
      {{ message }}
    </el-alert>
</template>

<script lang="ts">
    import { defineComponent, PropType } from 'vue';

    export default defineComponent({
        props: {
        message: String as PropType<string>, // Propriété message de type chaîne de caractères
        type: String as PropType<string>, // Propriété type de l'alerte
        title: String as PropType<string>, // Propriété titre de l'alerte
        },
    });
</script>
  
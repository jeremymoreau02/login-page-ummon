<template>
    <!-- Contenu de la vue -->
    <el-alert
      v-if="message"
      :title="title"
      :type="type"
      :closable="closable"
      :show-icon="showIcon"
    >
      {{ message }}
    </el-alert>
</template>

<script lang="ts">
    import { defineComponent, PropType } from 'vue';

    export default defineComponent({
        props: {
            message: {
                type: String as PropType<string>,
                required: true,
                description: "La propriété message est requise"
            },
            type: {
                type: String as PropType<string>,
                default: 'info',
                description: "Valeur par défaut du type d'alerte"
            },
            title: {
                type: String as PropType<string>,
                default: '',
                description : "Titre par défaut vide"
            },
            closable: {
                type: Boolean as PropType<boolean>,
                default: false,
                description: "Par défaut, l'alerte n'est pas refermable"
            },
            showIcon: {
                type: Boolean as PropType<boolean>,
                default: true,
                description: "Par défaut, l'icône d'alerte est affichée"
            },
        },
    });
</script>
  
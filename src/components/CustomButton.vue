<template>
    <!-- Contenu de la vue -->
    <el-button :type="type" @click="onClick" :size="size">{{ label }}</el-button>
</template>

<script lang="ts">
    import { defineComponent, PropType } from 'vue';

    export default defineComponent({
    props: {
        label: String as PropType<string>, // Propriété label de type chaîne de caractères
        type: String as PropType<string>, // Propriété type de bouton (par exemple, "primary" ou "success"),
        size: String as PropType<string>, // Propriété taille de bouton (par exemple, "large" ou "small")
    },
    methods: {
        onClick() {
        this.$emit('click'); // Émet un événement "click" lorsque le bouton est cliqué
        },
    },
    });
</script>
  
<template>
    <el-button :type="type" @click="onClick" :size="size">{{ label }}</el-button>
</template>

<script lang="ts">
    import { defineComponent, PropType } from 'vue';

    export default defineComponent({
        props: {
            label: {
                type: String as PropType<string>,
                required: true, // La propriété label est requise
                description: "Propriété label de type chaîne de caractères"
            },
            type: {
                type: String as PropType<string>,
                default: "primary", // Valeur par défaut de la propriété type est "primary"
                description: "Propriété type de bouton (par exemple, \"primary\" ou \"success\")"
            },
            size: {
                type: String as PropType<string>,
                default: "large", // Valeur par défaut de la propriété size est "large"
                description: "Propriété taille de bouton (par exemple, \"large\" ou \"small\")"
            },
        },
        methods: {
            onClick() {
                this.$emit('click'); // Émet un événement "click" lorsque le bouton est cliqué
            },
        },
    });
</script>
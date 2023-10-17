<template>
    <el-form-item :label="label">
      <!-- Champs de saisie -->
      <el-input :type="inputType" v-model="inputValue" :placeholder="placeholder" />
      <!-- Case à cocher pour afficher/masquer le mot de passe -->
      <el-checkbox v-if="isPassword" v-model="hidePassword" label="Afficher le mot de passe ?" size="large" />
    </el-form-item>
</template>

<script lang="ts">
    import { defineComponent, ref, watch } from 'vue';

    export default defineComponent({
        props: {
            label: {
                type: String,
                required: true,
                default: '',
                description: "L'étiquette du champ de saisie.",
            },
            value: {
                type: String,
                default: '',
                description: "La valeur du champ de saisie.",
            },
            placeholder: {
                type: String,
                default: '',
                description: "Le placeholder du champ de saisie.",
            },
            type: {
                type: String,
                default: 'text',
                validator: (value: string) => ['text', 'password'].includes(value),
                description: "Le type du champ (text ou password).",
            },
        },
        setup(props, { emit }) {
            const inputValue = ref(props.value); // Valeur du champ de saisie
            const hidePassword = ref(false); // Indicateur pour masquer ou afficher le mot de passe

            const isPassword = props.type === 'password'; // Vérifie si le type est "password"

            // Calcul du type d'input en fonction du type et de l'état de la case à cocher
            const inputType = ref(isPassword && !hidePassword.value ? 'password' : 'text');

            // Gère les changements de la valeur du champ de saisie
            watch(() => props.value, (newVal) => {
                inputValue.value = newVal;
            });

            // Gère les changements de l'état de la case à cocher
            watch(hidePassword, () => {
                inputType.value = isPassword && !hidePassword.value ? 'password' : 'text';
            });

            // Émet un événement lorsque la valeur change
            watch(inputValue, (newVal) => {
                emit('updateValue', newVal);
            });

            return {
                inputValue,
                hidePassword,
                isPassword,
                inputType,
            };
        },
    });
</script>

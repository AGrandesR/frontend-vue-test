<script setup>
import { computed } from 'vue'
const props = defineProps({
    givenName: {
        type: String,
        default: 'Unknown',
        required: false
    },
    lastName1: {
        type: String,
        default: '',
        required: false
    },
    lastName2: {
        type: String,
        default: '',
        required: false
    },
    email: {
        type: String,
        default: '',
        required: false
    },
    phone: {
        type: String,
        default: '',
        required: false
    }
})
const fullName = computed(() => {
    return `${props.givenName} ${props.lastName1} ${props.lastName2}`.trim();
})
</script>
<template>
    <v-card class="mx-auto my-12" max-width="80%">
        <v-card-item>
            <v-card-title>{{ fullName }}</v-card-title>

            <v-card-subtitle v-if="email!='' || email==false">
                <span class="me-1">{{ email }}</span>
                <v-icon color="error" icon="mdi-email" size="small"></v-icon>
            </v-card-subtitle>
            <v-card-subtitle v-if="phone!='' || phone==false">
                <span class="me-1">{{ phone }}</span>
                <v-icon color="error" icon="mdi-phone" size="small"></v-icon>
            </v-card-subtitle>
        </v-card-item>
    </v-card>
</template>
<style scoped></style>

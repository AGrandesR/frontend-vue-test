
<script setup>
import { useRouter } from 'vue-router'
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    returnTo: {
        type: String,
        default: '',
        required: false
    },
})
const router = useRouter()

const goToList = () => router.push(props.returnTo)

</script>
<template>
    <v-app-bar :elevation="2" class="header">
        <v-app-bar-title>{{ title }}</v-app-bar-title>

        <template v-slot:append>
            <v-btn icon="mdi-keyboard-return" v-if="returnTo!==''" @click="goToList" />
        </template>
    </v-app-bar>
    <!-- <div>
      <h1>{{ title }}</h1>
      <button v-if="returnTo!==''" @click="goToList">back</button>
    </div> -->
</template>
<style scoped>

</style>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import CustomHeader from '../components/CustomHeader.vue';
import CustomBody from '../components/CustomBody.vue';

const clients = ref([]);
const router = useRouter();

onMounted(async () => {
  try {
    const response = await fetch('https://agrandesr.github.io/frontend-vue-test/api/clients.json');
    if (!response.ok) {
      throw new Error('Failed to fetch clients');
    }
    clients.value = await response.json();
  } catch (error) {
    console.error(error);
  }
})

const goToUser = (id) => {
  if (id) {
    router.push(`/user/${id}`);
  } else {
    console.error('Invalid user ID');
  }
}
</script>

<template>
  <custom-header title="List"></custom-header>
  <custom-body>
    <v-list lines="one">
      <v-list-item
        v-for="user in clients"
        :key="user.id"
        :title="`${user.givenName} ${user.familyName1}`"
        :subtitle="user.email"
        @click="() => goToUser(user._id)"
      ></v-list-item>
    </v-list>
  </custom-body>
</template>

<style scoped>
</style>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToUser = (id) => {
  if (id) {
    router.push(`/user/${id}`);
  } else {
    console.error('Invalid user ID');
  }
};
</script>

<template>
  <h2>HomeView</h2>
  <button @click="() => goToUser(1)">Go to User 1</button>
  <button @click="() => goToUser(2)">Go to User 2</button>
</template>

<script setup>
import { useRouter } from 'vue-router'
import CustomHeader from '../components/CustomHeader.vue'
import CustomBody from '../components/CustomBody.vue'

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
  <custom-header title="List"></custom-header>
  <custom-body>
    <v-list lines="one">
      <v-list-item
        v-for="n in 3"
        :key="n"
        :title="'Item ' + n"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"
        @click="() => goToUser(n)"
      ></v-list-item>
    </v-list>
  </custom-body>
</template>

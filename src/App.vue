<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search)
  const redirectPath = urlParams.get('gh-pages-redirect')

  if (redirectPath) {
    router.push(`/${redirectPath}`)
  }
})
</script>

<template>
  <v-app>
    <RouterView />
  </v-app>
</template>

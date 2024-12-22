<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import CustomHeader from '../components/CustomHeader.vue'
import CustomBody from '../components/CustomBody.vue'

const router = useRouter()
const route = useRoute()
const userId = route.params.id

const search = computed({
  get() {
    return route.query.search ?? ''
  },
  set(search) {
    router.replace({ query: { search } })
  }
})
</script>

<template>
  <custom-header title="User" returnTo="/"></custom-header>
  <custom-body>{{userId}}</custom-body>
</template>
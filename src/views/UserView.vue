<script setup>
import { computed, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import CustomHeader from '../components/CustomHeader.vue'
import CustomBody from '../components/CustomBody.vue'

const route = useRoute()
const userId = route.params.id

const client = ref([])
const products = ref([])

onMounted(async () => {
  try {
    const response = await fetch('https://agrandesr.github.io/frontend-vue-test/api/clients.json');
    if (!response.ok) {
      throw new Error('Failed to fetch clients');
    }
    const json = await response.json()
    json.forEach(element => {
      if(element._id==userId) client.value=element
    })
  } catch (error) {
    console.error(error);
  }
  try {
    const response = await fetch('https://agrandesr.github.io/frontend-vue-test/api/products.json');
    if (!response.ok) {
      throw new Error('Failed to fetch clients');
    }
    const json = await response.json()
    const tmpProducts = []
    json.forEach(element => {
      if(element.customerId==userId) tmpProducts.push(element)
    })
    products.value=tmpProducts
  } catch (error) {
    console.error(error);
  }
})

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
  <custom-body>
    <p>{{JSON.stringify(client)}}</p>
    <p v-for="product in products">{{JSON.stringify(product)}}</p>
  </custom-body>
</template>
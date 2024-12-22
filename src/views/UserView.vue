<script setup>
import { computed, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import CustomHeader from '../components/CustomHeader.vue'
import CustomBody from '../components/CustomBody.vue'
import ClientCard from '../components/ClientCard.vue'
import EmptyCard from '../components/EmptyCard.vue'

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
    <client-card  :givenName="client.givenName" :lastName1="client.familyName1" :lastName2="client.familyName2" :email="client.email" :phone="client.phone"/>
    <empty-card>
      <v-list lines="one">
      <v-list-item
        v-for="product in products"
        :key="product._id"
        :title="`${product.productName}`"
        :subtitle="`Num: ${product.numeracioTerminal} - Type: ${product.productTypeName} `"
        @click="() => goToUser(user._id)"
      ></v-list-item>
    </v-list>
    </empty-card>
  </custom-body>
</template>
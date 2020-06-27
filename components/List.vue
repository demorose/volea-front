<template>
  <div class="bg-gray-300 m-6 p-3">
    <p v-if="$fetchState.pending">Fetching posts...</p>
    <OwnItem v-for="item in items" :key="item.id" v-bind:item="item" />
    <ItemForm />
    <button @click="$fetch">Refresh</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import OwnItem from './OwnItem'
import ItemForm from './Forms/Item'

export default {
  components: {
    OwnItem,
    ItemForm
  },
  computed: {
    ...mapGetters(['loggedInUser'])
  },
  data() {
    return {
      items: []
    }
  },
  async fetch() {
    console.log(this.loggedInUser)
    this.items = (
      await this.$axios.get(`/items/?owner__id=${this.loggedInUser.pk}`)
    ).data
  }
}
</script>

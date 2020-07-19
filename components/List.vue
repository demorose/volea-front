<template>
  <div class="bg-gray-300 m-6 p-3">
    <OwnItem v-for="item in items" :key="item.id" v-bind:item="item" />
    <ItemForm />
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
  computed: mapGetters({
    items: 'items/LIST',
    currentUser: 'loggedInUser'
  }),
  async fetch() {
    await this.$store.dispatch('items/GET_FOR_USER', this.currentUser.pk)
  }
}
</script>

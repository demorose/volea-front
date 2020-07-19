<template>
  <div>{{ item.name }}<span @click="remove">X</span></div>
</template>

<script>
export default {
  props: ['item'],
  methods: {
    async remove() {
      await this.$store.dispatch('items/REMOVE', this.item.id)
    }
  }
}
</script>

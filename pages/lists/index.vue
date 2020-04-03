<template>
  <div class="bg-white md:flex p-6 align-middle"></div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  auth: false,
  computed: {
    ...mapGetters(['loggedInUser'])
  }
}
</script>

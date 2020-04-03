<template>
  <div>
    <div class="bg-gray-500 h-screen overflow-auto">
      <Navbar />
      <nuxt />
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

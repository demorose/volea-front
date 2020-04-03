<template>
  <div v-if="isAuthenticated" class="relative">
    <button
      v-if="isOpen"
      class="fixed w-full h-full inset-0 opacity-50 bg-black cursor-default"
      tabindex="-1"
      @click="isOpen = false"
    />
    <button
      class="block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:border-gray-300"
      @click="isOpen = !isOpen"
    >
      <template v-if="loggedInUser.profile.avatar">
        <img
          class="h-full w-full object-cover"
          :src="loggedInUser.profile.avatar"
          :alt="loggedInUser.username"
          :title="loggedInUser.username"
        />
      </template>
      <template v-else>
        <img
          class="h-full w-full object-cover"
          src="/user.png"
          :alt="loggedInUser.username"
          :title="loggedInUser.username"
        />
      </template>
    </button>
    <div
      v-if="isOpen"
      class="absolute right-0 w-48 py-2 mt-2 bg-white rounded-lg shadow"
    >
      <span class="block px-4 py-2 border-b-2 border-gray-400 text-gray-800">
        {{ loggedInUser.name }} ({{ loggedInUser.username }})
      </span>
      <a class="block px-4 py-2" href="/user-info">{{
        $t('menu_my_account')
      }}</a>
      <a class="block px-4 py-2" href="#" @click="logout">{{
        $t('menu_logout')
      }}</a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  methods: {
    async logout() {
      await this.$auth.logout().then(this.$router.push('/login'))
    }
  }
}
</script>

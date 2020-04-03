<template>
  <nav class="flex bg-orange-400 item-center justify-between px-4 py-2">
    <div class="h-auto">
      <a class="block" href="/">Volea</a>
    </div>
    <div class="flex items-center justify-between">
      <div v-if="isAuthenticated" class="text-sm lg:flex-grow">
        <AccountDropdown />
      </div>
      <template v-else>
        <div class="text-sm lg:flex-grow mx-2">
          <a href="/register">{{ $t('menu_register') }}</a>
        </div>
        <div class="text-sm lg:flex-grow mx-2">
          <a href="/login">{{ $t('menu_login') }}</a>
        </div>
      </template>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import AccountDropdown from './AccountDropDown'

export default {
  components: {
    AccountDropdown
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  }
}
</script>

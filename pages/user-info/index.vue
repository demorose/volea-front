<template>
  <div class="bg-white md:flex p-6 align-middle">
    <ProfileForm :user="loggedInUser" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProfileForm from '../../components/Forms/Profile'

export default {
  auth: false,
  components: {
    ProfileForm
  },
  computed: {
    ...mapGetters(['loggedInUser'])
  }
}
</script>

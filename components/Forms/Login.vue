<template>
  <form class="w-full max-w-sm" @submit.prevent="login">
    <InlineInput
      v-model="formData.username"
      :label="this.$t('user_form_username')"
      type="text"
    />
    <InlineInput
      v-model="formData.password"
      :label="this.$t('user_form_password')"
      type="password"
    />
    <div
      v-if="error"
      class="bg-red-200 text-red-800 border-l-2 border-red-500 px-2 text-xs p-2 m-2"
    >
      {{ $t(login_form_error) }}
    </div>
    <SubmitButton :text="this.$t('login_form_submit')" />
  </form>
</template>

<script>
import InlineInput from './Elements/InlineInput'
import SubmitButton from './Elements/SubmitButton'

export default {
  components: {
    InlineInput,
    SubmitButton
  },
  data() {
    return {
      formData: {
        username: '',
        password: ''
      },
      error: false
    }
  },
  methods: {
    async login() {
      try {
        await this.$auth
          .loginWith('local', { data: this.formData })
          .then(() => this.$router.push('/'))
      } catch (err) {
        this.error = true
      }
    }
  }
}
</script>

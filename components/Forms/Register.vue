<template>
  <form class="w-full max-w-sm" @submit.prevent="submit">
    <InlineInput
      v-model="formData.first_name"
      :label="this.$t('user_form_first_name')"
      :errors="errors.first_name"
    />
    <InlineInput
      v-model="formData.last_name"
      :label="this.$t('user_form_last_name')"
      :errors="errors.last_name"
    />
    <InlineInput
      v-model="formData.username"
      :label="this.$t('user_form_username')"
      :errors="errors.username"
    />
    <InlineInput
      v-model="formData.email"
      :label="this.$t('user_form_email')"
      type="email"
      :errors="errors.email"
    />
    <InlineInput
      v-model="formData.password1"
      :label="this.$t('user_form_password')"
      type="password"
      :errors="errors.password1"
    />
    <InlineInput
      v-model="formData.password2"
      :label="this.$t('user_form_confirm_password')"
      type="password"
      :errors="errors.password2"
    />
    <InlineInput
      v-model="formData.birthday"
      :label="this.$t('user_form_birthday')"
      type="date"
      :errors="errors.birthday"
    />
    <div
      v-if="errors.non_field_errors"
      class="bg-red-200 text-red-800 border-l-2 border-red-500 px-2 text-xs p-2 m-2"
    >
      <div v-for="error in errors.non_field_errors" :key="error">
        {{ error }}
      </div>
    </div>
    <SubmitButton :text="this.$t('signin_form_submit')" />
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
        first_name: '',
        last_name: '',
        email: '',
        password1: '',
        password2: '',
        birthday: ''
      },
      errors: {
        profile: {}
      }
    }
  },
  methods: {
    async submit() {
      try {
        await this.$axios.post('/auth/registration/', this.formData)

        await this.$auth.loginWith('local', {
          data: {
            username: this.formData.username,
            password: this.formData.password1
          }
        })

        this.$router.push('/')
      } catch (e) {
        this.errors = {
          profile: {},
          ...e.response.data
        }
      }
    }
  }
}
</script>

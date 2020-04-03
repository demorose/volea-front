<template>
  <div>
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
        v-model="formData.profile.birthday"
        :label="this.$t('user_form_birthday')"
        type="date"
        :errors="errors.profile.birthday"
      />
      <InlineInput
        v-model="formData.profile.avatar"
        :label="this.$t('user_form_avatar')"
        :errors="errors.profile.avatar"
      />
      <div
        v-if="formData.profile.avatar"
        class="h-12 w-12 rounded-full overflow-hidden mx-auto mb-10"
      >
        <img
          class="h-full w-full object-cover"
          :src="formData.profile.avatar"
        />
      </div>
      <SubmitButton />
    </form>
    <div
      v-if="errors.non_field_errors"
      class="bg-red-200 text-red-800 border-l-2 border-red-500 px-2 text-xs"
    >
      <div v-for="error in errors.non_field_errors" :key="error">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
import InlineInput from './Elements/InlineInput'
import SubmitButton from './Elements/SubmitButton'

export default {
  auth: false,
  components: {
    InlineInput,
    SubmitButton
  },
  props: {
    user: Object
  },
  data() {
    return {
      formData: {
        username: this.user.username,
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        profile: {
          birthday: this.user.profile.birthday,
          avatar: this.user.profile.avatar
        }
      },
      errors: {
        profile: {}
      }
    }
  },
  methods: {
    async submit(e) {
      try {
        this.errors = { profile: {} }
        await this.$axios
          .patch('/auth/user/', this.formData)
          .then((response) => this.$auth.setUser(response.data))
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

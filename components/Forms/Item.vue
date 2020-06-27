<template>
  <div>
    <form class="w-full max-w-sm" @submit.prevent="submit">
      <OneInputForm v-model="formData.name" :errors="errors.name" />
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
import OneInputForm from './Elements/OneInputForm'

export default {
  auth: false,
  components: {
    OneInputForm
  },
  props: {
    item: Object
  },
  data() {
    return {
      formData: {
        name: ''
      },
      errors: {}
    }
  },
  methods: {
    async submit(e) {
      try {
        this.errors = {}
        await this.$axios.post('/items/', this.formData)
      } catch (e) {
        this.errors = {
          ...e.response.data
        }
      }
    }
  }
}
</script>

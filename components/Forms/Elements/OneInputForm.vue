<template>
  <div>
    <div class="md:flex md:items-center mb-6">
      <input
        :id="id"
        :value="value"
        class="bg-white focus:outline-none border border-gray-300 rounded-l py-2 px-4 block w-full appearance-none leading-normal"
        :type="type"
        @input="$emit('input', $event.target.value)"
      />
      <button
        class="bg-gray-500 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        type="submit"
      >
        {{ text || this.$t('form_submit') }}
      </button>
      <div v-if="errors" class="text-red-800 px-2 text-xs">
        <div v-for="error in errors" :key="error">{{ error }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    errors: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      id: null
    }
  },
  mounted() {
    this.id = this._uid
  }
}
</script>

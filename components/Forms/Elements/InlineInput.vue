<template>
  <div>
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label
          class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          :for="id"
        >
          {{ label }}
        </label>
      </div>
      <div class="md:w-2/3">
        <input
          :id="id"
          :value="value"
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          :type="type"
          @input="$emit('input', $event.target.value)"
        />
        <div v-if="errors" class="text-red-800 px-2 text-xs">
          <div v-for="error in errors" :key="error">{{ error }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    type: {
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

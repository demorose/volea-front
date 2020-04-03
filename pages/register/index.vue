<template>
  <div class="md:flex bg-white rounded-lg p-6 max-w-sm mx-auto mt-4">
    <RegisterForm />
  </div>
</template>

<script>
import RegisterForm from '../../components/Forms/Register'

export default {
  auth: false,
  components: {
    RegisterForm
  }
}
</script>

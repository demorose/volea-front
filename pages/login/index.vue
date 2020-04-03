<template>
  <div class="md:flex bg-white rounded-lg p-6 max-w-sm mx-auto mt-4">
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '../../components/Forms/Login'

export default {
  auth: false,
  components: {
    LoginForm
  }
}
</script>

<script setup lang="ts">
import { inject, reactive } from 'vue';
import { useAuthStore } from '../store/AuthStore'
import Credentials from '../domain/entity/Credentials';
import ServiceFactory from '../factory/Service.factory';

  const credentials = reactive<Credentials>({username: '', password: ''})

  const authStore = useAuthStore();
  const serviceFactory = inject("serviceFactory") as ServiceFactory
  const authService = serviceFactory.createAuthService()

  authStore.init(authService)

</script>

<template>
  login
  <div>
    <input type="text" v-model="credentials.username" />
  </div>
  <div>
    <input type="password" v-model="credentials.password" />
  </div>
  <button @click="authStore.login(credentials)">login</button>
</template>

<style scoped>
</style>

<script setup lang="ts">
  import { useRouter } from 'vue-router';
import { useAuthStore } from '../store/AuthStore';
  const router = useRouter()

  // navegação programatica
  function openBoard(){
    router.push({
      path: '/boards/1'
    })
  }

  const authStore = useAuthStore()
</script>

<template>
    <p>
        username: <strong>{{  authStore.session.username }}</strong>
    </p>
    <p>
        token: <strong>{{  authStore.session.token }}</strong>
    </p>
    <nav>
        <ul>
          <li>
            <router-link to="/">home</router-link><br/>
          </li>
          <li>
              <router-link to="/boards/1">boards</router-link><br/>
          </li>
          <li>
              <!-- outra forma de clicar: -->
              <div @click="openBoard">boards with onClick</div>
            </li>
            <li>
              <router-link to="/login">login</router-link><br/>
          </li>
          <li>
            <button @click="authStore.logout()">logout</button>
          </li>
        </ul>
      </nav>
      <button @click="$i18n.setLanguage('en')">ENGLISH</button>
      <button @click="$i18n.setLanguage('pt')">PT-BR</button>
</template>
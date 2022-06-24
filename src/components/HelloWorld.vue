<template>
  <div>
    <h1>{{ msg }}</h1>
    <h1>Getters</h1>
    <div v-for="getterUser in getUsers" :key="getterUser.id">
      {{ getterUser.id }} {{ getterUser.name }} {{ getterUser.address }}
    </div>
    <h1>Actions</h1>
    <div v-for="user in users" :key="user.id">
      {{ user.id }} {{ user.name }} {{ user.address }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useUserStore } from "@/stores/user";

const store = useUserStore();
const msg = ref("Welcome to Pinia");
const getUsers = computed(() => {
  return store.getUsers;
});
const users = computed(() => {
  return store.users;
});
onMounted(() => {
  store.fetchUsers();
});
</script>
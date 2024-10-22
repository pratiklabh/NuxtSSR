<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import Decimal from "decimal.js";

const title = ref('Welcome to my SSR App!');
const description = ref('This is a server-side rendered app using Nuxt.js and Vue.js.');

</script>

<style scoped>
h1 {
  font-size: 2em;
}
</style>

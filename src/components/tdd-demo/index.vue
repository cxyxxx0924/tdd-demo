<template>
  <div>
    <n-input v-model:value="item" @keydown.enter="handleAdd" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const item = ref<string>()
function handleAdd() {
  console.log(item.value);
  item.value = ''
}
</script>

<style></style>

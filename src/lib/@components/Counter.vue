<script setup lang="ts">
import { ref } from 'vue'

// defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <button class="btn btn-primary" type="button" @click="count++">
    count is {{ count }}
  </button>
</template>

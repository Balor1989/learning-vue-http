<template>
  <div class="error" v-if="error" :class="error.type">
    <h3>{{ error.title }}</h3>
    <p>{{ error.text }}</p>
    <button class="btn" :class="error.type" @click="$emit('close')">
      Close
    </button>
  </div>
</template>

<script>
export default {
  emits: ["close"],
  props: ["error"],
};
</script>

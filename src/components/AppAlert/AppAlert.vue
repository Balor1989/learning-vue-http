<template>
  <div class="alert" :class="type">
    <p class="alert-title">{{ title }}</p>
    <p>{{ text }}</p>
    <button class="btn" :class="type" @click="$emit('close')">Close</button>
  </div>
</template>

<script>
export default {
  emits: ["close"],
  props: {
    title: {
      default: "success",
      validator(value) {
        return ["success", "danger", "warning"].includes(value);
      },
    },
    text: String,
    closable: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "primary",
      validator(value) {
        return ["primary", "danger", "warning"].includes(value);
      },
    },
  },
};
</script>

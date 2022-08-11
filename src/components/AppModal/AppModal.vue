<template>
  <div class="modal-backdrop" @click="$emit('close')"></div>
  <div class="modal">
    <h2>Modal</h2>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis enim
      delectus necessitatibus fugiat ullam hic.
    </p>
  </div>
</template>

<script>
export default {
  emits: ["close"],
};
</script>

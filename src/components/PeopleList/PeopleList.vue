<template>
  <div v-if="people.length">
    <ul class="card">
      <li v-for="{ id, firstName } in people" :key="id">
        First Name : {{ firstName }}
      </li>
    </ul>
  </div>
  <div class="card center" v-else>
    <h3>Данные отсутствуют</h3>
    <button class="primary btn" @click="$emit('load')">Загрузить</button>
  </div>
</template>

<script>
export default {
  emits: ["load"],
  props: ["people"],
};
</script>

<style>
ul {
  list-style: none;
}
</style>

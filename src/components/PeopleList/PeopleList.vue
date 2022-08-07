<template>
  <div v-if="people.length">
    <ul class="card">
      <li class="item" v-for="{ id, firstName } in people" :key="id">
        First Name : {{ firstName }}
        <button class="btn danger" @click="$emit('delete', id)">Delete</button>
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
  emits: ["load", "delete"],
  props: ["people"],
};
</script>

<style>
ul {
  list-style: none;
}
.item {
  display: flex;
  justify-content: space-between;
}
</style>

<template>
  <div class="container">
    <form class="card" @submit.prevent="createPerson">
      <h1>Hello</h1>

      <div class="form-control">
        <label for="name"> Введите имя</label>
        <input type="text" id="name" v-model.trim="name" />
      </div>

      <button class="btn primary" :disabled="!name.length">Создать</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      url: "https://learning-vue-http-8cd67-default-rtdb.asia-southeast1.firebasedatabase.app/people.json",
    };
  },
  methods: {
    async createPerson() {
      try {
        const response = await fetch(this.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: this.name,
          }),
        });
        const data = await response.json();
        console.log(data);
        this.name = "";
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>

<style></style>

<template>
  <div class="container">
    <form class="card" @submit.prevent="createPerson">
      <h1>People list</h1>

      <div class="form-control">
        <label for="name"> Введите имя</label>
        <input type="text" id="name" v-model.trim="name" />
      </div>

      <button class="btn primary" :disabled="!name.length">Создать</button>
    </form>
    <div class="card">
      <PeopleList :people="people" @load="loadPeople" @delete="deletePerson" />
    </div>
  </div>
</template>

<script>
import PeopleList from "./components/PeopleList";
export default {
  components: { PeopleList },
  data() {
    return {
      name: "",
      url: "https://learning-vue-http-8cd67-default-rtdb.asia-southeast1.firebasedatabase.app/people.json",
      people: [],
    };
  },
  mounted() {
    this.loadPeople();
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
        this.people.push({
          firstName: this.name,
          id: data.name,
        });

        this.name = "";
      } catch (error) {
        console.log(error.message);
      }
    },
    async loadPeople() {
      const response = await fetch(this.url);
      const data = await response.json();
      this.people = Object.keys(data).map((key) => {
        return {
          id: key,
          firstName: data[key].firstName,
        };
      });
    },
    async deletePerson(id) {
      await fetch(
        `https://learning-vue-http-8cd67-default-rtdb.asia-southeast1.firebasedatabase.app/people/${id}.json`,
        { method: "DELETE" }
      );
      this.people = this.people.filter((person) => person.id !== id);
    },
  },
};
</script>

<style></style>

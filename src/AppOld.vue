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
    <div v-if="loading">
      <AppLoader />
    </div>
    <div v-else>
      <div class="card" v-if="!error">
        <PeopleList
          :people="people"
          @load="loadPeople"
          @delete="deletePerson"
        />
      </div>
      <div class="card" v-else>
        <ErrorIndicator :error="error" @close="error = null" />
      </div>
    </div>
  </div>
</template>

<script>
import PeopleList from "./components/PeopleList";
import ErrorIndicator from "./components/ErrorIndicator";
import AppLoader from "./components/Loader";
export default {
  components: { PeopleList, ErrorIndicator, AppLoader },
  data() {
    return {
      name: "",
      url: "https://learning-vue-http-8cd67-default-rtdb.asia-southeast1.firebasedatabase.app/people.json",
      people: [],
      error: null,
      loading: false,
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
      try {
        this.loading = true;
        const response = await fetch(this.url);
        const data = await response.json();
        if (!data) {
          this.loading = false;
          throw new Error("Список людей пуст");
        }
        this.people = Object.keys(data).map((key) => {
          return {
            id: key,
            firstName: data[key].firstName,
          };
        });
        this.loading = false;
      } catch (error) {
        this.loading = false;
        this.error = {
          type: "danger",
          title: "Error",
          text: error.message,
        };
      }
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

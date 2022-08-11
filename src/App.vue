<template>
  <div class="container">
    <AppBlock />
    <div class="card">
      <h2 v-color:[type].blink="myColor">Blink</h2>
      <h2 v-color:[type].hover="myColor">Hover</h2>
      <button class="btn" @click="myColor = 'blue'">Change color</button>
      <button
        class="btn"
        @click="type = type === 'color' ? 'backgroundColor' : 'color'"
      >
        Change type
      </button>
      {{ type }}
    </div>
    <form action="" class="form-control card">
      <label for="test"> test</label>
      <input type="text" id="text" v-focus />
    </form>
  </div>
</template>

<script>
import AppBlock from "./components/AppBlock";
import focusDirective from "./directives/focusDirective";
import colorDirective from "./directives/colorDirective";
export default {
  data() {
    return {
      myColor: "green",
      type: "color",
    };
  },
  components: {
    AppBlock,
  },
  directives: {
    focus: focusDirective,
    color: colorDirective,
  },
};
</script>

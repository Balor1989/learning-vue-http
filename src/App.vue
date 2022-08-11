<template>
  <div class="container">
    <AppBlock />
    <div class="card"><h2>Directives</h2></div>
    <form action="" class="form-control card">
      <label for="test"> test</label>
      <input type="text" id="text" v-focus />
    </form>
  </div>
</template>

<script>
import AppBlock from "./components/AppBlock";
import focusDirective from "./directives/focusDirective";
export default {
  components: {
    AppBlock,
  },
  directives: {
    focus: focusDirective,
  },
};
</script>

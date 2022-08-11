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
    <div class="card">
      <h2>Plugins</h2>
      <h2>{{ $1bb("app.title") }}</h2>
      <button class="btn" @click="changeLang">change language</button>
      <button class="btn" @click="$alert('Warning!')">Alert</button>
      <button v-if="!modal" class="btn primary" @click="modal = !modal">
        show modal
      </button>
    </div>
    <teleport to="#modal">
      <AppModal v-if="modal" @close="modal = false" />
    </teleport>
  </div>
</template>

<script>
import AppBlock from "./components/AppBlock";
import focusDirective from "./directives/focusDirective";
import colorDirective from "./directives/colorDirective";
import AppModal from "./components/AppModal";
export default {
  inject: ["changeLanguage"],
  data() {
    return {
      myColor: "green",
      type: "color",
      lang: "en",
      modal: false,
    };
  },
  methods: {
    changeLang() {
      if (this.lang === "en") {
        this.changeLanguage("ru");
        this.$forceUpdate();
        this.lang = "ru";
        return;
      }
      this.changeLanguage("en");
      this.$forceUpdate();
      this.lang = "en";
    },
  },
  components: {
    AppBlock,
    AppModal,
  },
  directives: {
    focus: focusDirective,
    color: colorDirective,
  },
};
</script>

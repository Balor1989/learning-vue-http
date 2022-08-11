<template>
  <div class="container">
    <AppAlert
      v-if="alert"
      type="warning"
      title="warning"
      text="This is a very important
    message"
      :closable="alert"
      @close="alert = false"
    />
    <div class="card">
      <button class="btn primary" @click="alert = !alert">
        {{ alert ? "hide " : "show" }}
      </button>
    </div>
  </div>
</template>

<script>
import alertMixin from "@/mixins/alertMixin";
import AppAlert from "../AppAlert";
export default {
  components: {
    AppAlert,
  },
  mixins: [alertMixin],
};
</script>

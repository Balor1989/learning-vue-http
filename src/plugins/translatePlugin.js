export default {
  install(app, options) {
    let current = "ru";

    const changeLanguage = (name) => {
      current = name;
    };

    app.config.globalProperties.$alert = (text) => {
      window.alert(text);
    };
    app.config.globalProperties.$1bb = (key) => {
      return key.split(".").reduce((word, i) => {
        return word[i] || "===UNKNOWN===";
      }, options[current]);
    };
    app.provide("changeLanguage", changeLanguage);
  },
};

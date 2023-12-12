export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, context) => {
    console.log("エラー", error);
    console.log("コンテキスト", context);
  };
});

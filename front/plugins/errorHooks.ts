export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("vue:error", (err, target, info) => {
    console.log("err", err);
    console.log("target", target);
    console.log("info", info);
  });
});

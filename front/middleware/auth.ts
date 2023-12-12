export default defineNuxtRouteMiddleware((to, from) => {
  //isAdmin関数はアクセスしているユーザが管理者かどうかチェックする関数です
  if (isAdmin() === false) {
    return navigateTo("/login");
  }
});

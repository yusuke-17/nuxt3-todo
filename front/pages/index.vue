<script setup>
const task = ref("");
const { data: tasks, refresh } = useFetch("/api/task");

const addTsk = () => {
  const { data } = useFetch("/api/task", {
    method: "POST",
    body: { task: task.value },
    force: true,
  })
    .then(() => {
      refresh();
      task.value = "";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
</script>
<template>
  <div>
    <h1>Main Page</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">{{ task.task }}</li>
    </ul>
    <form @submit.prevent="addTsk">
      <div>
        <input v-model="task" />
      </div>
      <div>
        <button type="submit">タスクを登録</button>
      </div>
    </form>
  </div>
</template>

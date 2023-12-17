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

const editTask = (taskId) => {
  const newTask = prompt("タスクを更新", task.value);
  if (newTask !== null) {
    useFetch("/api/task", {
      method: "PUT",
      body: { id: taskId, task: newTask },
      force: true,
    })
      .then(() => {
        refresh();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
};

const deleteTask = (taskId) => {
  useFetch("/api/task", {
    method: "DELETE",
    body: { id: taskId },
    force: true,
  })
    .then(() => {
      refresh();
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
      <li v-for="task in tasks" :key="task.id">
        {{ task.task }}
        <button @click="editTask(task.id)">編集</button>
        <button @click="deleteTask(task.id)">削除</button>
      </li>
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

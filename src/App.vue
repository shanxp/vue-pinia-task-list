<template>
  <main>
  <!-- Heading -->
  <header>
    <img src="./assets/pinia-logo.svg" alt="Pinia logo">
    <h1> {{ taskStore.name }} </h1>
  </header>
  <div class="new-task-form">
    <TaskForm />
  </div>
  <nav class="filter">
    <button @click="filter = 'all'">All tasks</button>
    <button  @click="filter = 'favs'">Favourite tasks</button>
  </nav>
  <div class="task-list" v-if="filter === 'all'">
      <h3> You have {{ taskStore.totalCount }} left to do</h3>
      <div v-for="task in taskStore.tasks"> 
        <TaskDetails :task="task" />
      </div>
  </div>
  <div class="task-list" v-if="filter === 'favs'">
     <h3> You have {{ taskStore.favCount }} left to do</h3>
      <div v-for="task in taskStore.favs"> 
        <TaskDetails :task="task" />
      </div>
  </div>
  </main>
</template>

<script>
  import  { ref } from 'vue';
  import TaskDetails from './components/TaskDetails.vue';
  import TaskForm from './components/TaskForm.vue';
  import { useTaskStore } from './stores/TaskStore';
  export default {
    components: { TaskDetails, TaskForm },
    setup() {
      const taskStore = useTaskStore();
      const filter = ref('all');

      return { taskStore, filter };
    }
    
  }
</script>
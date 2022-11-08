import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            { id:1, title: "Buy some milk", isFav: false },
            { id:2, title: "Buy bread", isFav: true },
            { id:3, title: "Buy fruits", isFav: true },
            { id:4, title: "Buy vegetables", isFav: false },
        ],
        name: 'Task List'
    }),
    getters: {
        favs() {
            return this.tasks.filter( t => t.isFav);
        },
        favCount() {
            return this.tasks.reduce( (count, item) => {
                return item.isFav? count + 1: count;
            }, 0);
        },
        totalCount: (state) => {
            return state.tasks.length;
        }
    },
    actions: {
        addTask(task) {
            this.tasks.push(task);
        },
        deleteTask(id) {
            this.tasks.filter( t => {
                return (t.id !== id);
            })
        },
        toggleFav(id) {
            const task = this.tasks.find( t => t.id === id );
            task.isFav = !task.isFav;
        }
    }
});
import { ref } from "vue";

export type Todo = {
  id: string;
};

const list = ref<Todo[]>([]);

export const useTodo = () => {
  const getTodos = async (id: string) => {
    const get = await fetch(`https://jsonplaceholder.typicode.com/todos/`);

    console.log(await get.json());
  };

  return {
    getTodos,
  };
};

import { ref } from "vue";

export type Todo = {
  id: string;
  title: string;
  label: string;
  color: string;
  checked: boolean;
};

const list = ref<Todo[]>([]);

export const useTodo = () => {
  const getTodos = async () => {
    const { data, pending, error, refresh } = await useAsyncData("todos", () =>
      fetch(`https://jsonplaceholder.typicode.com/todos/`),
    );

    if (!data.value) throw error.value;

    const todos: Todo[] = await data.value.json();

    list.value.push(...todos);

    // const todos = [
    //   {
    //     id: "1",
    //     title: "Stand Up",
    //     label: "Hard",
    //     color: "red",
    //     checked: true,
    //   },
    //   {
    //     id: "2",
    //     title: "Brush teeth",
    //     label: "Medium",
    //     color: "yellow",
    //     checked: true,
    //   },
    //   {
    //     id: "3",
    //     title: "Do sports",
    //     label: "Extreme",
    //     color: "violet",
    //     checked: false,
    //   },
    //   {
    //     id: "4",
    //     title: "Breakfast",
    //     label: "Super easy",
    //     color: "blue",
    //     checked: false,
    //   },
    //   {
    //     id: "5",
    //     title: "Start working",
    //     label: "Easy",
    //     color: "green",
    //     checked: false,
    //   },
    // ];

    return { data, pending, error };
  };

  return {
    getTodos,
  };
};

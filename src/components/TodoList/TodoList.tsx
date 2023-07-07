import { ITodo } from "../../types/todo";
import TodoItem from "../TodoItem/TodoItem";
import { List } from "./TodoList.styled";

interface ITodoListProps {
  items: ITodo[];
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}
const TodoList: React.FC<ITodoListProps> = (props) => {
  const { items, removeTodo, toggleTodo } = props;
  return (
    <List>
      {items.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </List>
  );
};

export default TodoList;

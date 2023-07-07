import { ITodo } from "../../types/todo";
import { Box, BtnClose, CheckBox, Item, Text } from "./TodoItem.styled";

export interface ITodoItem extends ITodo {
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, text, complete, removeTodo, toggleTodo } = props;
  return (
    <Item key={id}>
      <Box>
        <CheckBox
          type="checkbox"
          onChange={() => toggleTodo(id)}
          checked={complete}
        />
        <Text>{text}</Text>
      </Box>
      <div>
        <BtnClose onClick={() => removeTodo(id)}>x</BtnClose>
      </div>
    </Item>
  );
};

export default TodoItem;

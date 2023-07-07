import React, { useEffect, useRef, useState } from "react";
import { ITodo } from "../types/todo";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./TodoList/TodoList";
import { Box, Button, Container, Input, Title, Wrapper } from "./App.styled";

const App: React.FC = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("todos"))
      setTodos(JSON.parse(localStorage.getItem("todos")!));
  }, []);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const addTodo = () => {
    if (value) {
      setTodos([...todos, { id: uuidv4(), text: value, complete: false }]);
      localStorage.setItem(
        "todos",
        JSON.stringify([
          ...todos,
          { id: uuidv4(), text: value, complete: false },
        ])
      );
    }
    setValue("");
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") addTodo();
  };

  const removeTodo = (id: string): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
    const todosTostring: string = JSON.stringify(
      todos.filter((todo) => todo.id !== id)
    );
    localStorage.setItem("todos", todosTostring);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          complete: !todo.complete,
        };
      })
    );
  };

  return (
    <Container>
      <Wrapper>
        <Title>To do list</Title>
        <Box>
          <Input
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={value}
            ref={inputRef}
          ></Input>
          <Button type="button" onClick={addTodo}>
            Add
          </Button>
        </Box>
      </Wrapper>
      <TodoList items={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </Container>
  );
};

export default App;

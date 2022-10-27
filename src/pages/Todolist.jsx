import React, { useState } from "react";
import Form from "../components/form/Form";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import List from "../components/list/List";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Let's study React",
      body: "This is body to use to write a context.",
      isDone: false,
    },
    {
      id: 2,
      title: "Assignment October 27",
      body: "This is body to use to write a context.",
      isDone: true,
    },
  ]);

  return (
    <Layout>
      <Header />
      <Form setTodos={setTodos} todos={todos} />
      <List todos={todos} setTodos={setTodos} />
    </Layout>
  );
};

export default TodoList;

import React, { useState } from "react";
import Form from "../components/Form";
import List from "../components/List/indext";
import { Timer } from "../components/Timer";
import { ITask } from "../types/task";
import style from "./App.module.scss";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} />
      <Timer />
    </div>
  );
}

export default App;
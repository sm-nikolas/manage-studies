import React from "react";
import { ITask } from "../../types/task";
import Button from "../Button";
import style from "./Form.module.scss";
import { v4 as uuidv4 } from "uuid";

class Form extends React.Component<{
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}> {
  state = {
    task: "",
    time: "00:00",
  };

  addTask(event: React.FocusEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.setTasks((oldTasks) => [
      ...oldTasks,
      {
        ...this.state,
        select: false,
        finished: false,
        id: uuidv4(),
      },
    ]);

    this.setState({
      task: "",
      time: "00:00",
    });
  }

  render() {
    return (
      <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="task">Adicione um novo estudo</label>
          <input
            type="text"
            name="task"
            id="task"
            value={this.state.task}
            onChange={(event) =>
              this.setState({
                ...this.state,
                task: event.target.value,
              })
            }
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="time">Tempo</label>
          <input
            type="time"
            name="time"
            id="time"
            step="1"
            min="00:00:00"
            max="01:30:00"
            onChange={(event) =>
              this.setState({
                ...this.state,
                time: event.target.value,
              })
            }
            value={this.state.time}
            required
          />
        </div>
        <Button type="submit" description="Adicionar" />
      </form>
    );
  }
}

export default Form;

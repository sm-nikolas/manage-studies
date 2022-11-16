import { ITask } from "../../../types/task";
import style from "./item.module.scss";

interface Props extends ITask {
  selectTask: (taskSelected: ITask) => void;
}

export default function Item({
  task,
  time,
  select,
  finished,
  id,
  selectTask,
}: Props) {
  return (
    <li
      className={`${style.item} ${select ? style.itemSelected : ""} ${
        finished ? style.itemCompleted : ""
      }`}
      onClick={() =>
        !finished &&
        selectTask({
          task,
          time,
          select,
          finished,
          id,
        })
      }
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {finished && (
        <span className={style.completed} aria-label="tarefa completada"></span>
      )}
    </li>
  );
}

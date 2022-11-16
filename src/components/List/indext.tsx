import { ITask } from "../../types/task";
import Item from "./Item/inde";
import style from "./List.module.scss";

interface Props {
  tasks: ITask[];
  selectTask: (taskSelected: ITask) => void;
}

function List({ tasks, selectTask }: Props) {
  return (
    <aside className={style.listTasks}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item) => (
          <Item key={item.id} {...item} selectTask={selectTask} />
        ))}
      </ul>
    </aside>
  );
}

export default List;

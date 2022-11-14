import { ITask } from "../../types/task";
import Item from "./Item/inde";
import style from "./List.module.scss";

function List({ tasks }: { tasks: ITask[] }) {
  return (
    <aside className={style.listTasks}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default List;

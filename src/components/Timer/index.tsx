import { useState, useEffect } from "react";
import { timeToSecunds } from "../../common/utils/date";
import { ITask } from "../../types/task";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Timer.module.scss";

interface Props {
  selected: ITask | undefined;
  finishTask: () => void;
}

export function Timer({ selected, finishTask }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSecunds(selected.time));
    }
  }, [selected]);

  function regressive(cont: number = 0) {
    setTimeout(() => {
      if (cont > 0) {
        setTime(cont - 1);
        return regressive(cont - 1);
      }
      finishTask();
    }, 1000);
  }

  return (
    <div className={style.timer}>
      <p className={style.title}>Escolha o card e inicie o cronômetro</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button
        description="Começar"
        onClick={() => {
          regressive(time);
        }}
      />
    </div>
  );
}

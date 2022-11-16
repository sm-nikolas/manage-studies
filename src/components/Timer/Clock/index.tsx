import style from "./Clock.module.scss";

interface Props {
  time: number | undefined;
}
export default function Clock({ time = 0 }: Props) {
  const minutes = Math.floor(time / 60);
  const secunds = time % 60;
  const [minutesDez, minutesUni] = String(minutes).padStart(2, "0");
  const [secundDez, secundUni] = String(secunds).padStart(2, "0");
  return (
    <>
      <span className={style.numberClock}>{minutesDez}</span>
      <span className={style.numberClock}>{minutesUni}</span>
      <span className={style.divisionClock}>:</span>
      <span className={style.numberClock}>{secundDez}</span>
      <span className={style.numberClock}>{secundUni}</span>
    </>
  );
}

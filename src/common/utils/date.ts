export function timeToSecunds(time: string) {
  const [hours = "0", minutes = "0", secunds = "0"] = time.split(":");

  const hoursOnSecunds = Number(hours) * 3600;
  const minutesOnSecunds = Number(minutes) * 60;

  return hoursOnSecunds + minutesOnSecunds + Number(secunds);
}

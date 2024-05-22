function convertDurationToTime(duration) {
  const hours = Math.floor(duration); // Obtient le nombre d'heures entières
  const minutes = Math.round((duration % 1) * 60); // Convertit la partie décimale en minutes

  // Formate les heures et les minutes
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}`;
}
//===========================================================
//            Fonction
//===========================================================

function getFormattedTime(dateDepart) {
  const date = new Date(dateDepart);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

function subtractTime(time1, time2) {
  const [hours1, minutes1] = time1.split(":");
  const [hours2, minutes2] = time2.split(":");

  const totalMontantMinutes1 = parseInt(hours1) * 60 + parseInt(minutes1);
  const totalMontantMinutes2 = parseInt(hours2) * 60 + parseInt(minutes2);

  const differenceMinutes = totalMontantMinutes1 - totalMontantMinutes2;

  const hours =
    Math.floor(differenceMinutes / 60)
      .toString()
      .padStart(2, "0") + "h";
  const minutes = (differenceMinutes % 60).toString().padStart(2, "0") + "mn";

  return `${hours}:${minutes}`;
}
function getFormattedDate(dateDepart) {
  const date = new Date(dateDepart);
  const daysOfWeek = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
  const day = daysOfWeek[date.getDay()];
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const dayOfMonth = date.getDate().toString().padStart(2, "0");
  return `${day} ${dayOfMonth}-${month}`;
}
//==================================================AddTime==================================================

function addTime(time1, time2) {
  const [hours1, minutes1] = time1.split(":").map(Number);
  const [hours2, minutes2] = time2.split(":").map(Number);

  let totalMinutes = (hours1 + hours2) * 60 + (minutes1 + minutes2);

  // Si le total des minutes dépasse 23h59min, recommencer à 00h00min (24h00min)
  if (totalMinutes >= 24 * 60) {
    totalMinutes -= 24 * 60;
  }

  const hours = Math.floor(totalMinutes / 60)
    .toString()
    .padStart(2, "0");
  const minutes = (totalMinutes % 60).toString().padStart(2, "0");

  return `${hours}:${minutes}`;
}

export{
    getFormattedDate,
    addTime,
    subtractTime,
    getFormattedTime,
    convertDurationToTime

}
import { hoursLoad } from "../form/hours-load.js";

//Selecionando o input de data.
const selectedDate = document.getElementById("date");

export async function schedulesDay() {
      // Obtém a data do input
  const date = selectedDate.value;
  
  // Carrega as horas disponíveis para a data especificada.
  hoursLoad({ date, dailySchedules });
}

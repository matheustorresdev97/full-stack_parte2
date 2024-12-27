import { schedulesDay } from "../schedules/load";
//Seleciona o imput da data
const selectedDate = document.getElementById("date");

// Recarregar a lista de horários quando a data for alterada.
selectedDate.onchange = () => schedulesDay();

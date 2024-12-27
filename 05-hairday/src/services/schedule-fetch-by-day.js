import { apiConfig } from "./api-config";
import dayjs from "dayjs";

export async function scheduleFetchByDay({date}) {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/schedules`);
    const data = await response.json();

    // Filtra os agendamentos pelo dia
    const dailySchedules = data.filter((schedule) =>
      dayjs(date).isSame(schedule.when, "day")
    );

    return dailySchedules;
  } catch (error) {
    console.log(error);
    alert("Não foi possível buscar os agendamentos do dia selecionado.");
  }
}

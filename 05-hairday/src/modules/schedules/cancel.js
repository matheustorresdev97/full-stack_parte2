import { schedulesDay } from "./load.js";
import { scheduleCancel } from "../../services/schedule-cancel.js";

const periods = document.querySelectorAll(".period");

// Gera evento click para cada lista ( manhã, tarde e noite )
periods.forEach((period) => {
  // Captura o evento click.
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      // Obter a li pai do elemento clicado.
      const item = event.target.closest("li");

      // Pega o id do agendamento para remover.
      const { id } = item.dataset;

      // Confirma se o usuário deseja cancelar o agendamento.
      if (id) {
        const isConfirm = confirm(
          "Deseja realmente cancelar este agendamento?"
        );

        if (isConfirm) {
          // Faz a requisição para cancelar o agendamento.
          await scheduleCancel({ id });
          // Atualiza a lista de agendamentos.
          schedulesDay();
        }
      }
    }
  });
});

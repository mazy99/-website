// cta.js
import { navigateTo } from "../js/main.js";

export function renderCTA() {
  const section = document.createElement("section");
  section.className = "cta";
  section.innerHTML = `
    <h3>Стань исполнителем и начни зарабатывать</h3>
    <p>Ты сам выбираешь задачи и время работы</p>
    <button id="cta-register-btn">Зарегистрироваться</button>
  `;

  section.querySelector("#cta-register-btn")?.addEventListener("click", () => {
    navigateTo("/html/register.html");
  });

  return section;
}
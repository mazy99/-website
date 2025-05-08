import { register } from "./auth.js";
import { navigateTo } from "./main.js";

const app = document.getElementById("app");

export function renderRegisterPage() {
  const container = document.createElement("div");
  container.className = "register-container";

  container.innerHTML = `
    <h1>Регистрация</h1>
    <form id="registerForm">
      <div class="form-group">
        <label for="username">Имя пользователя</label>
        <input type="text" id="username" required>
      </div>
      <div class="form-group">
        <label for="password">Пароль</label>
        <input type="password" id="password" required>
      </div>
      <button type="submit">Зарегистрироваться</button>
    </form>
  `;

  app.innerHTML = "";
  app.appendChild(container);

  document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    register(username, password, "user");
    alert("Регистрация успешна. Выполните вход.");
    navigateTo("/html/login.html");
  });
}

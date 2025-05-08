import { login } from "./auth.js"; // Импортируем функции для логина

const app = document.getElementById("app");

export function renderLoginPage() {
  // Если пользователь уже авторизован, перенаправляем на главную страницу
  if (localStorage.getItem("user")) {
    window.location.href = "/html/index.html"; // Перенаправляем на главную страницу
    return;
  }

  const loginContainer = document.createElement("div");
  loginContainer.className = "login-container";

  loginContainer.innerHTML = `
    <h1>Войти в Taskero</h1>
    <form id="loginForm">
      <div class="form-group">
        <label for="username">Логин</label>
        <input type="text" id="username" name="username" required placeholder="Введите ваш логин">
      </div>
      <div class="form-group">
        <label for="password">Пароль</label>
        <input type="password" id="password" name="password" required placeholder="Введите ваш пароль">
      </div>
      <button type="submit">Войти</button>
      <p id="errorMessage" style="color: red; display: none;">Неверный логин или пароль</p>
    </form>
  `;

  app.innerHTML = ''; // Очищаем текущий контент
  app.appendChild(loginContainer); // Добавляем форму на страницу

  const form = document.getElementById("loginForm");
  const errorMessage = document.getElementById("errorMessage");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращаем стандартную отправку формы

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Пытаемся выполнить вход
    const isLoggedIn = login(username, password);

    if (isLoggedIn) {
      window.location.href = "/html/index.html"; // Если вход успешен, перенаправляем на главную страницу
    } else {
      // Если вход неудачен, показываем сообщение об ошибке
      errorMessage.style.display = "block";
    }
  });
}

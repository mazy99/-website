// header.js
import { getCurrentUser, logout, isAdmin } from "../js/auth.js";
import { navigateTo } from "../js/main.js";

export function renderHeader() {
  const user = getCurrentUser();

  const header = document.createElement("header");
  header.className = "header";

  header.innerHTML = `
    <div class="logo">Taskero</div>
    <nav>
      <a href="#" id="nav-home">Главная</a>
      <a href="#">Категории</a>
      <a href="#">Как это работает</a>
      <a href="#">Контакты</a>
      ${
        user
          ? `<span class="user-info">Привет, ${user.username}</span>
             ${isAdmin() ? '<a href="/admin.html" id="nav-admin">Админ-панель</a>' : ''}
             <a href="#" id="nav-logout">Выйти</a>`
          : `<a href="#" id="nav-login">Вход</a>
             <a href="#" id="nav-register">Регистрация</a>`
      }
    </nav>
  `;

  setTimeout(() => {
    document.getElementById("nav-home")?.addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo("/");
    });

    document.getElementById("nav-login")?.addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo("/html/login.html");
    });

    document.getElementById("nav-register")?.addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo("/html/register.html");
    });

    document.getElementById("nav-admin")?.addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo("/html/admin.html");
    });

    document.getElementById("nav-logout")?.addEventListener("click", (e) => {
      e.preventDefault();
      logout();
      navigateTo("/");
    });
  }, 0);

  return header;
}
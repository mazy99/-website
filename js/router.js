import { renderHomePage } from "./main.js";
import { renderLoginPage } from "./login.js";
import { renderRegisterPage } from "./register.js";
import { renderAddServicePage } from "./addService.js";
import { renderAdminPage } from "./admin.js";
import { renderEditServicePage } from "./editService.js";
import { isAuthenticated, isAdmin } from "./auth.js";

// Функция для обработки маршрутов
export function handleRouting() {
  const path = window.location.pathname;

  if (path === "/html/login.html") {
    renderLoginPage();
  } else if (path === "/html/register.html") {
    renderRegisterPage();
  } else if (path === "/html/add-service.html") {
    renderAddServicePage();
  } else if (path === "/html/admin.html" && isAuthenticated() && isAdmin()) {
    renderAdminPage();
  } else if (path.startsWith("/html/edit-service.html")) {
    renderEditServicePage(); // Обработка edit с параметром id
  } else {
    renderHomePage(); // Главная страница по умолчанию
  }
}

// Функция навигации
export function navigateTo(url) {
  history.pushState(null, null, url);
  handleRouting();
}

// Обработка кнопки "назад"
window.addEventListener("popstate", handleRouting);

// Начальная маршрутизация при загрузке страницы
handleRouting();

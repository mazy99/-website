import { services, removeService } from "./data.js";
import { navigateTo } from "./main.js";
import { checkAdminAccess } from "./auth.js";

export function renderAdminPage() {
  if (!checkAdminAccess()) return;
  
  const app = document.getElementById("app");
  if (!app) return;
  
  app.innerHTML = `
    <div class="admin-container">
      <h1>Панель администратора</h1>
      <h2>Управление услугами</h2>
      <div class="services-list" id="adminServicesList"></div>
      <button id="addServiceBtn" class="btn-primary">Добавить услугу</button>
    </div>
  `;

  renderAdminServicesList();

  document.getElementById("addServiceBtn").addEventListener("click", () => {
    navigateTo("/add-service");
  });
}

function renderAdminServicesList() {
  if (!checkAdminAccess()) return;
  
  const servicesList = document.getElementById("adminServicesList");
  if (!servicesList) return;

  servicesList.innerHTML = services.map(service => `
    <div class="service-card" data-id="${service.id}">
      <h3>${service.title}</h3>
      <p>${service.description}</p>
      <p>Категория: ${service.category}</p>
      <p>Цена: ${service.price}</p>
      <div class="service-actions">
        <button class="edit-btn" data-id="${service.id}">Редактировать</button>
        <button class="delete-btn" data-id="${service.id}">Удалить</button>
      </div>
    </div>
  `).join("");

  document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.target.getAttribute("data-id"));
      if (confirm("Вы уверены, что хотите удалить эту услугу?")) {
        removeService(id);
        renderAdminServicesList();
      }
    });
  });

  document.querySelectorAll(".edit-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.target.getAttribute("data-id"));
      navigateTo(`/edit-service?id=${id}`);
    });
  });
}
// components/services.js
import { services } from "../servicesData.js";
import { isAuthenticated, isAdmin } from "../js/auth.js";
import { navigateTo } from "../js/main.js";

export function renderServices() {
  const section = document.createElement("section");
  section.className = "services";
  section.innerHTML = `
    <h2>Наши услуги</h2>
    <div class="services-list"></div>
  `;
  
  const servicesList = section.querySelector(".services-list");

  // Для каждой услуги генерируем карточку
  services.forEach(service => {
    const serviceItem = document.createElement("div");
    serviceItem.className = "service-item";
    serviceItem.innerHTML = `
      <img src="${service.imageUrl || 'images/default-service.jpg'}" alt="${service.title}" class="service-image">
      <h3>${service.title}</h3>
      <p>${service.description}</p>
      <span class="category">${service.category}</span>
      <span class="price">${service.price}</span>
      ${isAuthenticated() ? '<button class="request-btn">Откликнуться</button>' : ''}
      ${isAdmin() ? `
        <div class="admin-actions">
          <button class="edit-btn" data-id="${service.id}">Редактировать</button>
          <button class="delete-btn" data-id="${service.id}">Удалить</button>
        </div>
      ` : ''}
    `;
    servicesList.appendChild(serviceItem);
  });
  // Добавляем обработчики для администратора
  if (isAdmin()) {
    section.querySelector("#addServiceBtn")?.addEventListener("click", () => {
      navigateTo("/add-service.html");
    });

    section.querySelectorAll(".delete-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const id = parseInt(e.target.getAttribute("data-id"));
        if (confirm("Вы уверены, что хотите удалить эту услугу?")) {
          // Здесь будет вызов функции удаления
          // После удаления можно обновить страницу
          location.reload();
        }
      });
    });

    section.querySelectorAll(".edit-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const id = parseInt(e.target.getAttribute("data-id"));
        navigateTo(`/edit-service.html?id=${id}`);
      });
    });
  }
  return section;
}

import { services, updateService } from "./data.js";
import { navigateTo } from "./main.js";
import { showSuccess } from "./ui.js";

export function renderEditServicePage() {
  const urlParams = new URLSearchParams(window.location.search);
  const serviceId = parseInt(urlParams.get('id'));
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    navigateTo("/");
    return;
  }

  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = `
    <div class="edit-service-container">
      <h1>Редактирование услуги</h1>
      <form id="editServiceForm">
        <input type="hidden" id="id" value="${service.id}">
        <div class="form-group">
          <label for="title">Название услуги</label>
          <input type="text" id="title" value="${service.title}" required>
        </div>
        <div class="form-group">
          <label for="description">Описание</label>
          <textarea id="description" required>${service.description}</textarea>
        </div>
        <div class="form-group">
          <label for="category">Категория</label>
          <input type="text" id="category" value="${service.category}" required>
        </div>
        <div class="form-group">
          <label for="price">Цена</label>
          <input type="text" id="price" value="${service.price}" required>
        </div>
        <button type="submit">Сохранить изменения</button>
      </form>
    </div>
  `;

  document.getElementById("editServiceForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const id = parseInt(document.getElementById("id").value);
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const price = document.getElementById("price").value;

    if (updateService(id, title, description, category, price)) {
      showSuccess("Изменения сохранены!");
      navigateTo("/admin");
    }
  });
}
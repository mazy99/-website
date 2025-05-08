import { addService } from "./data.js";
import { navigateTo } from "./main.js";
import { showSuccess } from "./ui.js";

export function renderAddServicePage() {
  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = `
    <div class="add-service-container">
      <h1>Добавить новую услугу</h1>
      <form id="addServiceForm">
        <div class="form-group">
          <label for="title">Название услуги</label>
          <input type="text" id="title" required>
        </div>
        <div class="form-group">
          <label for="description">Описание</label>
          <textarea id="description" required></textarea>
        </div>
        <div class="form-group">
          <label for="category">Категория</label>
          <input type="text" id="category" required>
        </div>
        <div class="form-group">
          <label for="price">Цена</label>
          <input type="text" id="price" required>
        </div>
        <button type="submit">Добавить услугу</button>
      </form>
    </div>
  `;

  document.getElementById("addServiceForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const price = document.getElementById("price").value;

    addService(title, description, category, price);
    showSuccess("Услуга успешно добавлена!");
    navigateTo("/admin");
  });
}
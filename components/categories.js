// categories.js
import { services } from "../servicesData.js";

export function renderCategories() {
  // Получаем уникальные категории из услуг
  const uniqueCategories = [...new Set(services.map(service => service.category))];
  
  const section = document.createElement("section");
  section.className = "categories";
  section.innerHTML = `
    <h2>Популярные категории</h2>
    <div class="category-list"></div>
  `;

  const categoryList = section.querySelector(".category-list");

  // Ограничиваем количество отображаемых категорий (например, первые 3)
  uniqueCategories.slice(0, 3).forEach(category => {
    const categoryItem = document.createElement("div");
    categoryItem.className = "category-item";
    categoryItem.innerHTML = `
      <h3>${category}</h3>
      <p>${getCategoryDescription(category)}</p>
    `;
    categoryList.appendChild(categoryItem);
  });

  return section;
}

// Вспомогательная функция для описания категорий
function getCategoryDescription(category) {
  const descriptions = {
    "Уборка": "Простая и эффективная уборка вашего дома и офиса.",
    "Ремонт": "Полный спектр ремонтных услуг: от электрики до отделки.",
    "Транспорт": "Грузоперевозки и доставка по городу.",
    "IT-помощь": "Компьютерная помощь и настройка оборудования."
  };
  return descriptions[category] || "Разнообразные услуги в этой категории.";
}
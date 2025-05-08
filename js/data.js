// data.js

// Моковые данные об услугах
export const services = [
    { id: 1, title: "Помыть полы", description: "Уборка в доме", category: "Уборка", price: "500 ₽" },
    { id: 2, title: "Сделать ремонт", description: "Ремонт под ключ", category: "Ремонт", price: "5000 ₽" },
  ];
  
  // Функция для добавления новой услуги
export function addService(title, description, category, price) {
    const newService = {
        id: services.length > 0 ? Math.max(...services.map(s => s.id)) + 1 : 1, // Генерируем уникальный ID
        title,
        description,
        category,
        price,
    };
    services.push(newService);
    return newService;
}

  // Функция для удаления услуги
export function removeService(id) {
    const index = services.findIndex(service => service.id === id);
    if (index !== -1) {
        services.splice(index, 1);
    }
}
// Функция для обновления услуги
export function updateService(id, title, description, category, price) {
  const service = services.find(s => s.id === id);
  if (service) {
      service.title = title;
      service.description = description;
      service.category = category;
      service.price = price;
      return service;
  }
  return null;
}
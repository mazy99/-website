// ui.js

// Функция для отображения/скрытия формы входа
export function toggleLoginForm(visible) {
    const loginForm = document.getElementById("loginForm");
    if (visible) {
      loginForm.style.display = "block";
    } else {
      loginForm.style.display = "none";
    }
  }
  
  // Функция для отображения ошибки
  export function showError(message) {
    const errorContainer = document.getElementById("errorContainer");
    errorContainer.textContent = message;
    errorContainer.style.display = "block";
  }
  
  // Функция для очистки ошибок
  export function clearErrors() {
    const errorContainer = document.getElementById("errorContainer");
    errorContainer.style.display = "none";
  }
  
  // Функция для отображения сообщения об успехе
  export function showSuccess(message) {
    const successContainer = document.getElementById("successContainer");
    successContainer.textContent = message;
    successContainer.style.display = "block";
  }
  
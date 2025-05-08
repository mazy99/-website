// components/footer.js
export function renderFooter() {
  const footer = document.createElement("footer");
  footer.className = "footer";
  footer.innerHTML = `
    <p>&copy; 2025 Taskero. Все права защищены.</p>
    <nav>
      <a href="#">О нас</a>
      <a href="#">Политика конфиденциальности</a>
      <a href="#">Поддержка</a>
    </nav>
  `;
  return footer;
}

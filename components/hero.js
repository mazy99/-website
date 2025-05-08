// components/hero.js
export function renderHero() {
  const section = document.createElement("section");
  section.className = "hero";
  section.innerHTML = `
    <h1>Добро пожаловать в Taskero!</h1>
    <p>Найдите исполнителей для любых задач или станьте исполнителем.</p>
    <button>Начать</button>
  `;
  return section;
}

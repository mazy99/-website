import { renderHeader } from "../components/header.js";
import { renderFooter } from "../components/footer.js";
import { renderHero } from "../components/hero.js";
import { renderCategories } from "../components/categories.js";
import { renderCTA } from "../components/cta.js";
import { renderServices } from "../components/services.js";
import { handleRouting } from "./router.js";

export function navigateTo(path) {
  history.pushState({}, "", path);
  handleRouting();
}

export function renderHomePage() {
  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = "";
  app.append(
    renderHeader(),
    renderHero(),
    renderCategories(),
    renderServices(),
    renderCTA(),
    renderFooter()
  );
}

// Инициализация
document.addEventListener("DOMContentLoaded", () => {
  handleRouting();
});

window.addEventListener("popstate", handleRouting);
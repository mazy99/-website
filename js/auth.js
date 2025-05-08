import { navigateTo } from "./main.js";

const users = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "user", password: "user123", role: "user" },
];

export function login(username, password) {
  const user = users.find(user => user.username === username && user.password === password);
  
  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
    return true;
  }
  return false;
}

export function register(username, password, role = "user") {
  if (users.some(u => u.username === username)) {
    return false;
  }
  users.push({ username, password, role });
  return true;
}

export function isAdmin() {
  const user = getCurrentUser();
  return user && user.role === "admin";
}

export function logout() {
  localStorage.removeItem("user");
}

export function getCurrentUser() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

export function isAuthenticated() {
  return getCurrentUser() !== null;
}

export function checkAdminAccess() {
  if (!isAuthenticated() || !isAdmin()) {
    navigateTo("/");
    return false;
  }
  return true;
}
document.getElementById("year") && (document.getElementById("year").textContent = new Date().getFullYear());
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));
}
// Front-end demo only: real user accounts require a secure authentication backend.
document.querySelectorAll("[data-demo-form]").forEach(form => {
  form.addEventListener("submit", event => {
    event.preventDefault();
    const message = form.querySelector(".form-message");
    if (message) message.textContent = "Demo form only — connect a secure authentication service to enable real accounts.";
  });
});

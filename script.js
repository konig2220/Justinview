// script.js
document.getElementById("diagnosticForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const probleme = document.getElementById("probleme").value;

  // Simulation d’un diagnostic simple
  let message = "";
  if (probleme.includes("travail")) {
    message = "Votre problème semble lié au droit du travail. Nous vous orientons vers un avocat spécialisé.";
  } else if (probleme.includes("famille")) {
    message = "Votre problème semble lié au droit de la famille. Nous vous orientons vers un avocat spécialisé.";
  } else {
    message = "Merci pour votre demande. Un avocat partenaire vous contactera sous peu.";
  }

  document.getElementById("resultat").innerText = message;
});

// Bouton retour en haut
// Bouton burger
// Bouton burger
const burger = document.getElementById("burger");
const navMenu = document.querySelector("nav ul");

// Ouvrir/fermer le menu
burger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Fermer le menu quand on clique sur un lien
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});
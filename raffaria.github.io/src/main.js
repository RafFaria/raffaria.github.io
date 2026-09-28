import "@fontsource-variable/dm-sans";
import "./style.css";
import { assets, colors, company, products, whatsappUrl } from "./content.js";
import { mugArt } from "./mug-art.js";
import { icon } from "./icons.js";

const escapeHtml = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const localAsset = (path) =>
  /^(https?:)?\/\//.test(path)
    ? path
    : `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

document.querySelectorAll("[data-icon]").forEach((node) => {
  node.innerHTML = icon(node.dataset.icon);
});
document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.href = whatsappUrl(link.dataset.message);
});

const hero = document.querySelector("#hero-mug");
hero.innerHTML = assets.hero.image
  ? `<img src="${escapeHtml(localAsset(assets.hero.image))}" width="600" height="540" alt="${escapeHtml(assets.hero.alt)}" fetchpriority="high" />`
  : mugArt({ id: "hero", design: "ideas", color: "#f5aec7" });
document.querySelector("#hero-mug-secondary").innerHTML = mugArt({
  id: "hero-small",
  design: "smile",
  color: "#ffdf7e",
});
document.querySelector("#about-mug").innerHTML = mugArt({
  id: "about",
  design: "minimal",
  color: "#dce9d9",
});

const grid = document.querySelector("#product-grid");
function renderProducts(filter = "all") {
  const selection = products.filter(
    (product) => filter === "all" || product.category === filter,
  );
  grid.innerHTML = selection
    .map((product) => {
      const image = product.image
        ? `<img src="${escapeHtml(localAsset(product.image))}" alt="${escapeHtml(product.alt)}" width="440" height="390" loading="lazy" decoding="async" />`
        : mugArt({
            id: product.id,
            design: product.id,
            color: product.color,
          }).replace(
            'aria-label="Ilustração de uma caneca personalizada"',
            `aria-label="${escapeHtml(product.alt)}"`,
          );
      return `<article class="product-card"><a href="${whatsappUrl(`Olá! Vi a inspiração “${product.name}” no site da TAMP e gostaria de conversar sobre uma caneca nesse estilo.`)}" aria-label="Conversar sobre a inspiração ${escapeHtml(product.name)}"><div class="product-art" style="--product-background:${product.background}"><span class="product-label">${product.label}</span>${image}<span class="product-action">Personalizar ${icon("diagonal")}</span></div><div class="product-info"><div><h3>${product.name}</h3><p>${product.description}</p></div><span class="product-arrow" aria-hidden="true">${icon("diagonal")}</span></div></a></article>`;
    })
    .join("");
  document.querySelector("#filter-status").textContent =
    `${selection.length} inspirações disponíveis.`;
}
renderProducts();
document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach((item) => {
      const selected = item === button;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    renderProducts(button.dataset.filter);
  });
});

// A prévia é apenas visual. Nenhum pedido ou dado é armazenado no site.
const customForm = document.querySelector("#customizer");
const customText = document.querySelector("#custom-text");
const swatches = document.querySelector("#color-options");
swatches.innerHTML = colors
  .map(
    (color, index) =>
      `<label class="color-option" title="${color.name}"><input type="radio" name="color" value="${color.value}" aria-label="${color.name}" ${index === 0 ? "checked" : ""}><span style="--swatch:${color.value}" aria-hidden="true">${icon("check")}</span></label>`,
  )
  .join("");
function selectedColor() {
  return (
    colors.find(
      (color) => color.value === new FormData(customForm).get("color"),
    ) || colors[0]
  );
}
function updatePreview() {
  document.querySelector("#custom-mug").innerHTML = mugArt({
    id: "custom",
    design: "custom",
    text: customText.value,
    color: selectedColor().value,
  });
  document.querySelector("#text-count").textContent =
    `${customText.value.length}/24`;
}
customText.addEventListener("input", updatePreview);
swatches.addEventListener("change", updatePreview);
customForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const phrase = customText.value.trim();
  const message = `Olá! Experimentei o personalizador da TAMP e quero conversar sobre uma caneca. ${phrase ? `Minha ideia de frase: “${phrase}”. ` : ""}Cor de inspiração: ${selectedColor().name}. Podemos combinar a arte e o modelo?`;
  // Mesma aba: evita abrir uma nova janela a cada clique no WhatsApp.
  window.location.assign(whatsappUrl(message));
});
updatePreview();

const toggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");
function setMenu(open, restoreFocus = false) {
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  navigation.classList.toggle("is-open", open);
  if (restoreFocus) toggle.focus();
}
toggle.addEventListener("click", () =>
  setMenu(toggle.getAttribute("aria-expanded") !== "true"),
);
navigation
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape")
    setMenu(false, navigation.classList.contains("is-open"));
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) setMenu(false);
});
document.addEventListener("focusin", (event) => {
  if (!event.target.closest(".site-header")) setMenu(false);
});
window
  .matchMedia("(min-width: 1100px)")
  .addEventListener("change", () => setMenu(false));

// O conteúdo permanece visível se JavaScript ou IntersectionObserver não funcionar.
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
if (!reduceMotion.matches && "IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 },
  );
  document.querySelectorAll("[data-reveal]").forEach((element) => {
    element.classList.add("will-reveal");
    revealObserver.observe(element);
  });
}

// A identificação dos contatos continua centralizada para futuras alterações.
document.querySelectorAll("[data-phone]").forEach((element) => {
  element.textContent = company.phoneLabel;
});

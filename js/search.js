// ===== state =====
let mode = "search";

// ===== elements =====
const form = document.getElementById("search-form");
const toggleBtn = document.getElementById("mode-toggle");
const engineSelect = document.getElementById("engine");
const input = document.getElementById("keyword");

// ===== config =====
const SEARCH_ENGINES = {
  google: "https://www.google.com/search?q=",
  bing: "https://www.bing.com/search?q=",
  yahoo: "https://search.yahoo.co.jp/search?p=",
  yandex: "https://yandex.com/search?text=",
  duckduckgo: "https://duckduckgo.com/?q="
};

const AI_URL = "https://chat.openai.com/?q=";

// ===== UI update =====
function updateUI() {
  if (mode === "search") {
    toggleBtn.textContent = "Search";
    toggleBtn.setAttribute("aria-pressed", "false");
    engineSelect.classList.remove("hidden-search");
    input.placeholder = "Search...";
  } else {
    toggleBtn.textContent = "AI";
    toggleBtn.setAttribute("aria-pressed", "true");
    engineSelect.classList.add("hidden-search");
    input.placeholder = "Ask AI...";
  }
}

// ===== mode toggle =====
toggleBtn.addEventListener("click", () => {
  mode = mode === "search" ? "ai" : "search";
  updateUI();
});

// ===== form submit =====
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const query = input.value.trim();
  if (!query) return;

  if (mode === "search") {
    const engine = engineSelect.value;
    const baseUrl = SEARCH_ENGINES[engine];
    if (!baseUrl) return;

    const url = baseUrl + encodeURIComponent(query);
    window.open(url, '_blank', 'noopener,noreferrer');

  }

  if (mode === "ai") {
    const url= AI_URL + encodeURIComponent(query);
    window.open(url, '_blank', 'noopener,noreferrer');
  }
});

// ===== init =====
updateUI();
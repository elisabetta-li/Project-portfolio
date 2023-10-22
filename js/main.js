const btnDarkMode = document.querySelector(".dark-mode-btn");

function setMode() {
  // Проверка темной темы на уровне системный настроек
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    changeDarkMode("dark");
  }

  // Проверка темной схемы в localStorage
  if (localStorage.getItem("darkMode") === "dark") {
    changeDarkMode("dark");
  } else if (localStorage.getItem("darkMode") === "light") {
    changeDarkMode("light");
  }

  // Изменение системный настроек при смене темы
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      const newColorScheme = event.matches ? "dark" : "light";

      if (newColorScheme === "dark") {
        changeDarkMode("dark");
        localStorage.setItem("darkMode", "dark");
      } else {
        changeDarkMode("light");
        localStorage.setItem("darkMode", "light");
      }
    });

  // Включение ночного режима по кнопке
  btnDarkMode.onclick = () => {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
      localStorage.setItem("darkMode", "dark");
    } else {
      localStorage.setItem("darkMode", "light");
    }
  };
}

function changeDarkMode(mode) {
  if (mode === "dark") {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
  } else if (mode === "light") {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
  }
}

setMode();

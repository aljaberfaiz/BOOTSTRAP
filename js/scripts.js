/*!
 * Custom scripts for my personal portfolio (Bootstrap 5)
 */
(function ($) {
  "use strict";

  // YEAR in footer
  document.getElementById("year")?.appendChild(document.createTextNode(new Date().getFullYear()));

  // Smooth scrolling using jQuery + easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on("click", function (e) {
    const samePath = location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "");
    const sameHost = location.hostname === this.hostname;
    if (samePath && sameHost) {
      const target = $(this.hash);
      const $t = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if ($t.length) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: $t.offset().top - 72 }, 900, "easeInOutExpo");
      }
    }
  });

  // Collapse responsive navbar when a nav-item is clicked
  $(".js-scroll-trigger").on("click", function () {
    const $nav = $(".navbar-collapse");
    if ($nav.hasClass("show")) $nav.removeClass("show");
  });

  // ScrollSpy (Bootstrap 5)
  const mainNav = document.getElementById("mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, { target: "#mainNav", offset: 74 });
  }

  // Navbar shrink (kept for subtle effect even though nav is dark by default)
  const navbarShrink = () => {
    if (!mainNav) return;
    (window.scrollY > 80) ? mainNav.classList.add("navbar-shrink") : mainNav.classList.remove("navbar-shrink");
  };
  navbarShrink();
  document.addEventListener("scroll", navbarShrink);

  // Back to top
  const backBtn = document.getElementById("backToTop");
  const onScroll = () => {
    if (!backBtn) return;
    if (window.scrollY > 400) backBtn.classList.add("show");
    else backBtn.classList.remove("show");
  };
  window.addEventListener("scroll", onScroll);
  backBtn?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // Theme toggle with localStorage
  const themeToggle = document.getElementById("themeToggle");
  const root = document.documentElement;

  // Initialize theme from storage or default to light
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    root.setAttribute("data-theme", savedTheme);
  } else if (!root.getAttribute("data-theme")) {
    root.setAttribute("data-theme", "light");
  }

  const setIcon = () => {
    const theme = root.getAttribute("data-theme");
    if (themeToggle) themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
  };
  setIcon();

  themeToggle?.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || "light";
    const next = current === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setIcon();
  });

})(jQuery);
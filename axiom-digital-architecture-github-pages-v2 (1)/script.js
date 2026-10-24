const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");

if (toggle && links) {
  const setMenuOpen = open => {
    links.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  };

  toggle.addEventListener("click", () => {
    setMenuOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  links.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") setMenuOpen(false);
  });
}

const inquiryForm = document.querySelector("#inquiry-form");
const inquiryStatus = document.querySelector("#inquiry-status");

inquiryForm?.addEventListener("submit", event => {
  event.preventDefault();
  if (!(inquiryForm instanceof HTMLFormElement) || !inquiryForm.reportValidity()) return;

  const values = new FormData(inquiryForm);
  const details = [
    `Name: ${values.get("name")}`,
    `Email: ${values.get("email")}`,
    values.get("business") ? `Business: ${values.get("business")}` : "",
    values.get("topic") ? `Topic: ${values.get("topic")}` : "",
    "",
    String(values.get("message") ?? "")
  ].filter(Boolean).join("\n");
  const subject = encodeURIComponent("Small business AI workflow inquiry");
  const body = encodeURIComponent(details);

  if (inquiryStatus) {
    inquiryStatus.textContent = "Your email app should open with this message. Review it and send it there; nothing is sent by this page.";
  }
  window.location.href = `mailto:admin@stack.report?subject=${subject}&body=${body}`;
});

const carousel = document.querySelector(".social-content-carousel");
if (carousel) {
  const slides = carousel.querySelectorAll(".carousel-slide");
  const prevBtn = carousel.querySelector(".carousel-prev");
  const nextBtn = carousel.querySelector(".carousel-next");
  const dotsContainer = carousel.querySelector(".carousel-dots");
  let currentIndex = 0;

  if (slides.length > 0) {
    slides.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.className = "carousel-dot";
      dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
      dot.addEventListener("click", () => goToSlide(index));
      dotsContainer?.appendChild(dot);
    });

    const updateCarousel = () => {
      slides.forEach((slide, index) => {
        slide.classList.toggle("active", index === currentIndex);
      });
      const dots = dotsContainer?.querySelectorAll(".carousel-dot") || [];
      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
      });
      if (prevBtn) prevBtn.disabled = currentIndex === 0;
      if (nextBtn) nextBtn.disabled = currentIndex === slides.length - 1;
    };

    const goToSlide = (index) => {
      if (index >= 0 && index < slides.length) {
        currentIndex = index;
        updateCarousel();
      }
    };

    prevBtn?.addEventListener("click", () => goToSlide(currentIndex - 1));
    nextBtn?.addEventListener("click", () => goToSlide(currentIndex + 1));

    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") goToSlide(currentIndex - 1);
      if (event.key === "ArrowRight") goToSlide(currentIndex + 1);
    });

    updateCarousel();
  }
}

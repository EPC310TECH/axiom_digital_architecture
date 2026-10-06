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

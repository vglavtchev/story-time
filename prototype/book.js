(function () {
  const spreads = Array.from(document.querySelectorAll(".spread"));
  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");
  const indicator = document.getElementById("page-indicator");
  let index = 0;

  function show(i) {
    index = Math.max(0, Math.min(i, spreads.length - 1));
    spreads.forEach((el, j) => {
      el.classList.toggle("is-active", j === index);
      el.setAttribute("aria-hidden", j === index ? "false" : "true");
    });
    if (indicator) {
      indicator.textContent = `${index + 1} / ${spreads.length}`;
    }
    if (btnPrev) btnPrev.disabled = index === 0;
    if (btnNext) btnNext.disabled = index === spreads.length - 1;
    const title = spreads[index].dataset.title || "";
    document.title = title ? `${title} · story-time` : "story-time prototype";
  }

  btnPrev?.addEventListener("click", () => show(index - 1));
  btnNext?.addEventListener("click", () => show(index + 1));

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") show(index - 1);
    if (e.key === "ArrowRight") show(index + 1);
  });

  show(0);
})();

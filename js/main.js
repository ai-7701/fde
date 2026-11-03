document.addEventListener("click", function (event) {
  const button = event.target.closest(".copy-btn");
  if (!button) return;
  const code = button.closest(".code-wrap").querySelector("pre").innerText;
  navigator.clipboard.writeText(code).then(() => {
    const old = button.innerText;
    button.innerText = "Copied!";
    setTimeout(() => button.innerText = old, 1300);
  }).catch(() => {
    button.innerText = "Select code";
  });
});
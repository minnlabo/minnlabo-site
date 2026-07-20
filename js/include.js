document.querySelectorAll("[data-include]").forEach(function (el) {
  fetch(el.getAttribute("data-include"))
    .then(function (res) { return res.text(); })
    .then(function (html) { el.outerHTML = html; })
    .catch(function (err) { console.error("include failed:", el.getAttribute("data-include"), err); });
});

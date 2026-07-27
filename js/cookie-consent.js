(function () {
  var STORAGE_KEY = "creolab-cookie-consent";

  window.creolabCookieConsent = {
    get: function () {
      return localStorage.getItem(STORAGE_KEY);
    },
  };

  function announce(value) {
    document.dispatchEvent(new CustomEvent("cookieconsent", { detail: value }));
  }

  var stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    announce(stored);
    return;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var banner = document.getElementById("cookie-banner");
    if (!banner) return;

    banner.classList.add("is-visible");

    function choose(value) {
      localStorage.setItem(STORAGE_KEY, value);
      banner.classList.remove("is-visible");
      announce(value);
    }

    var acceptBtn = document.getElementById("cookie-accept");
    var rejectBtn = document.getElementById("cookie-reject");
    if (acceptBtn) acceptBtn.addEventListener("click", function () { choose("accepted"); });
    if (rejectBtn) rejectBtn.addEventListener("click", function () { choose("rejected"); });
  });
})();

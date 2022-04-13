(function (hostname) {
  if (hostname === "127.0.0.1" || hostname === "localhost") {
    return;
  }
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-12YRCQVNG9");
})(window.location.hostname);

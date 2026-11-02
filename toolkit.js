/* Small helpers shared by the newer web-tools pages. */
(function () {
  "use strict";

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    var area = document.createElement("textarea");
    area.value = text;
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
    return Promise.resolve();
  }

  function download(blob, filename) {
    var url = URL.createObjectURL(blob);
    var link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  function debounce(fn, ms) {
    var timer = null;
    return function () {
      var args = arguments, context = this;
      clearTimeout(timer);
      timer = setTimeout(function () { fn.apply(context, args); }, ms);
    };
  }

  function formatBytes(bytes) {
    if (!isFinite(bytes)) return "—";
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KiB";
    if (bytes < 1024 * 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(2) + " MiB";
    return (bytes / (1024 * 1024 * 1024)).toFixed(2) + " GiB";
  }

  function flash(button, text, original) {
    var label = original || button.textContent;
    button.textContent = text;
    setTimeout(function () { button.textContent = label; }, 1200);
  }

  window.Toolkit = {
    escapeHtml: escapeHtml,
    copyText: copyText,
    download: download,
    debounce: debounce,
    formatBytes: formatBytes,
    flash: flash
  };
})();

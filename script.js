// TEXT AREA
document.addEventListener("DOMContentLoaded", function () {
  let textarea = document.getElementById("message");
  textarea.addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
  });
});

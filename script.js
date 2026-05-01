const menu = document.getElementById("share-toast");

document.querySelectorAll('[aria-controls="share-toast"]').forEach((btn) => {
  btn.onclick = (e) => {
    e.stopPropagation();
    menu.classList.toggle("hidden");
  };
});

window.onclick = (e) => {
  if (!menu.contains(e.target)) {
    menu.classList.add("hidden");
  }
};

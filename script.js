const shareOptions = document.querySelector(".share-options");
const shareBtn = document.querySelector(".share-btn");
shareBtn.addEventListener("click", (e) => {
  shareBtn.classList.toggle("active");
  shareOptions.classList.toggle("active");
});

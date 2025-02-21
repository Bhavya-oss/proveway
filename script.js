function toggleGrid(gridId) {
  document.querySelectorAll(".grid-container").forEach((curr) => {
    curr.style.display = "none";
  });
  document.getElementById(gridId).style.display = "grid";
  document
    .querySelectorAll(".outer-group")
    .forEach((curr) => curr.classList.remove("active"));
  console.log("closetcloset", event.currentTarget.closest(".outer-group"));
  event.currentTarget.closest(".outer-group").classList.add("active");
}

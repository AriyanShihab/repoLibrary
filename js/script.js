const filters = document.querySelectorAll(".filter");
const cardContainer = document.getElementById(`cardContainer`);

cardContainer.innerHTML = `
${project
  .map((prjct) => {
    return ` <div class="card" data-filter="${prjct.filterTag}">
  <div class="project-image">
      <img src="${prjct.img}" alt="" />
  </div>
  <div class="projectTitle">${prjct.title}</div>
  <div class="shortDescreption">
     ${prjct.discription}
  </div>
  <div class="projectLinks">
      <a  target="_blank" href="${prjct.liveLink}">Live Demo</a
>
<a  target="_blank" href="${prjct.sourseCode}"
>Source Code</a
>
</div>
</div>
  `;
  })
  .join(" ")}
`;

filters.forEach((filter) => {
  filter.addEventListener("click", function () {
    let selectedFilter = filter.getAttribute("data-filter");
    let itemsToHide = document.querySelectorAll(
      `.container .card:not([data-filter='${selectedFilter}'])`
    );
    let itemsToShow = document.querySelectorAll(
      `.container [data-filter='${selectedFilter}']`
    );

    if (selectedFilter == "all") {
      itemsToHide = [];
      itemsToShow = document.querySelectorAll(".container [data-filter]");
    }

    itemsToHide.forEach((el) => {
      el.classList.add("hide");
      el.classList.remove("show");
    });

    itemsToShow.forEach((el) => {
      el.classList.remove("hide");
      el.classList.add("show");
    });
  });
});

// add active claass to the filter buttton

for (var i = 0; i < filters.length; i++) {
  filters[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// popup handelar

const closeButton = document.getElementById(`close`);
const popupParent = document.getElementById(`popupParent`);
const body = document.getElementById(`stopScroll`);

closeButton.addEventListener("click", () => {
  popupParent.style.display = "none";
  body.classList.remove(`stop`);
});

let popUpFire = function () {
  popupParent.classList.add(`showPOpup`);
  body.classList.add(`stop`);
};
window.onload = function () {
  setTimeout(popUpFire, 4000);
};
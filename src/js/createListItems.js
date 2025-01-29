import stepsForSoftwareProject from "./stepsData.js";
import shuffleArray from "./shuffleArray.js";
import handleDragAndDrop from "./dragAndDrop.js";
import compareOrder from "./compareOrder.js";

const createListItem = () => {
  const list = document.querySelector(".list");
  list.innerHTML = "";
  const shuffledArray = shuffleArray([...stepsForSoftwareProject]);

  shuffledArray.forEach((step, index) => {
    const listItem = document.createElement("li");
    list.append(listItem);
    listItem.textContent = `${index + 1}.${step}`;
    listItem.classList.add("list__item");
    listItem.setAttribute("draggable", true);
    listItem.setAttribute("data-index", index);
  });
  const compareButton = document.createElement("button");
  document.querySelector(".main-container").append(compareButton);
  compareButton.textContent = "Check order";
  compareButton.classList.add("list__compare-button");

  compareButton.addEventListener("click", () => {
    compareOrder();
  });
  handleDragAndDrop();
};

export default createListItem;

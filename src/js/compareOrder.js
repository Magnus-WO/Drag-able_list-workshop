import stepsForSoftwareProject from "./stepsData";

const compareOrder = () => {
  const listItems = document.querySelectorAll(".list__item");
  const currentOrder = [...listItems].map(
    (item) => item.textContent.split(".")[1]
  );
  console.log(currentOrder);

  const isCorrect = currentOrder.every((step, index) => {
    return step === stepsForSoftwareProject[index];
  });

  console.log(isCorrect);

  currentOrder.forEach((step, index) => {
    if (step === stepsForSoftwareProject[index]) {
      listItems[index].classList.add("correct");
      listItems[index].classList.remove("incorrect");
    } else {
      listItems[index].classList.add("incorrect");
      listItems[index].classList.remove("correct");
    }
  });
};

export default compareOrder;

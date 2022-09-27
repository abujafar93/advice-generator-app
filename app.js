const button = document.querySelector(".button");

const updateUI = (data) => {
  const { slip } = data;
  document.querySelector(".advice").innerHTML = slip.advice;

  document.querySelector(".advice-number").innerHTML = slip.id;
};

button.addEventListener("click", () => {
  const getAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");

    if (response.status !== 200) {
      throw new Error("Cannot fetch the data");
    }

    const data = await response.json();

    // console.log(data);
    return data;
  };

  getAdvice()
    .then((data) => updateUI(data))
    .catch((err) => console.log("rejected;", err));
});

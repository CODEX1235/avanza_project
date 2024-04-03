const greyColor = document.querySelector(".grey");
const whiteandblackColor = document.querySelector(".whiteandblack");
const blueColor = document.querySelector(".blue");

const CardButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3")[0];

const imageCard = document.querySelector(".img-container");

const feedbackBtn = document.querySelector(".feedback");

const buttonText = document.querySelector(".button-text");

greyColor.addEventListener("click", function () {
  CardButton.style.backgroundColor = "grey";
  buttonText.style.color = "black";
  itemTag.style.backgroundColor = "white";
  itemTag.style.color = "grey";
  imageCard.style.backgroundImage = "url(./img/1.jpg)";
});

whiteandblackColor.addEventListener("click", function () {
  CardButton.style.backgroundColor = "white";
  buttonText.style.color = "black";
  itemTag.style.backgroundColor = "white";
  itemTag.style.color = "black";
  imageCard.style.backgroundImage = "url(./img/2.jpg)";
});

blueColor.addEventListener("click", function () {
  CardButton.style.backgroundColor = "blue";
  buttonText.style.color = "yellow";
  itemTag.style.backgroundColor = "white";
  itemTag.style.color = "blue";
  imageCard.style.backgroundImage = "url(./img/3.jpg)";
});

const cart = () => {
  CardButton.style.display = "none";
  feedbackBtn.style.display = "block";
};

CardButton.addEventListener("click", cart);

const feedback = () => {
  CardButton.style.display = "block";
  feedbackBtn.style.display = "none";
};

feedbackBtn.addEventListener("click", feedbackFun);

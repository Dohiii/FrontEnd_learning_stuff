quotes = {
  "Judith Star":
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit nihil mollitia rerum, suscipit, tenetur libero minima, solu",
  "Melissa Wennis":
    "Omnis! Aperiam sit nulla nemo fugit esse labore autem saepe cupiditate fugiat. Ratione minus rerum, sunt perferendis odio provident soluta ex repellendus",
  "Harold Man": "Wooow",
  "Buisenes Man": "Money is time and time is money, lol",
};

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const button = document.querySelector("button");

button.addEventListener("click", function (e) {
  const keys = Object.keys(quotes);
  const randomIndex = Math.floor(Math.random() * keys.length);
  const randomKey = keys[randomIndex];
  const randomValue = quotes[randomKey];
  quote.textContent = randomValue;
  author.textContent = randomKey;

  console.log(`${randomKey}: ${randomValue}`);
});

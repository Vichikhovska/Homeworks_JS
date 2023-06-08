const key = "83483b8f";
const BASE_URL = `https://www.omdbapi.com/?apikey=${key}&`;

const form = document.querySelector(".form");
const input = document.querySelector(".search_input");
const labels = document.querySelectorAll(".search_label");
let thisPage = 1;

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const movieName = input.value;
  const movieType = getSelectedRadioButtonValue();
  await search(movieName, movieType);
});

function getSelectedRadioButtonValue() {
  let selectedValue = "";
  labels.forEach((label) => {
    if (label.querySelector("input").checked) {
      selectedValue = label.querySelector("input").getAttribute("name");
    }
  });
  return selectedValue;
}

const search = async (movieName, movieType) => {
  try {
    const resp = await axios.get(`${BASE_URL}&s=${movieName}&type=${movieType}&page=${thisPage}`);
    const filmList = resp.data.Search;
    const resultList = document.querySelector(".resultList");
    resultList.innerHTML = "";

    if (filmList) {
      filmList.forEach((film) => {
        const listItem = document.createElement("li");
        listItem.textContent = film.Title;
        resultList.appendChild(listItem);
      });
    } else {
      const notFound = document.querySelector(".notFound");
      notFound.textContent = "Movie not found!";
    }
  } catch (error) {
    console.error(error);
  }
};

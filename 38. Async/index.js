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
      filmList.forEach(async (film) => {
        const listItem = document.createElement("li");
        listItem.textContent = film.Title;
        resultList.appendChild(listItem);

        const detailsBtn = document.createElement("button");
        detailsBtn.textContent = "Details";
        
        detailsBtn.addEventListener("click", async () => {
          const filmDetails = await getFilmDetails(film.imdbID);
          console.log(filmDetails)
          if (filmDetails) {
            const detailsElement = document.createElement("div");
            detailsElement.classList.add("filmDetails");

            // for (const key in filmDetails) {
            //   const propertyElement = document.createElement("p")
            //   propertyElement.textContent = `${key}: ${filmDetails[key]}`;
            //   detailsElement.appendChild(propertyElement);
            // }

            const year = document.createElement("p");
            year.textContent = `Year: ${filmDetails.Year}`;
            detailsElement.appendChild(year);

            const imdbRating = document.createElement("p");
            imdbRating.textContent = `Raiting: ${filmDetails.imdbRating}`;
            detailsElement.appendChild(imdbRating);

            const plot = document.createElement("p");
            plot.textContent = `Plot: ${filmDetails.Plot}`;
            detailsElement.appendChild(plot);

            const posterElement = document.createElement("img");
            posterElement.src = filmDetails.Poster;
            detailsElement.appendChild(posterElement);

            listItem.insertAdjacentElement("afterend", detailsElement);
          }
        });

        listItem.appendChild(detailsBtn);
      });
    } else {
      const notFound = document.querySelector(".notFound");
      notFound.textContent = "Movie not found!";
    }
  } catch (error) {
    console.error(error);
  }
};

const getFilmDetails = async (imdbID) => {
  try {
    const resp = await axios.get(`${BASE_URL}i=${imdbID}`);
    return resp.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

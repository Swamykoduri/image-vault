const accessKey = "FKL3yk4A9dDvsN2Ca_v8-20dTl_ecsY3B9f66SpBD90";

const searchInput = document.querySelector(".input-form");
const inputValue = document.querySelector(".input");
const gallery = document.querySelector(".image-gallery");
const showBtn = document.querySelector(".show-btn");
// about page
const about = document.querySelector(".about");
//const features = document.querySelector(".features");

//
let query = "";
// page number
let page = 1;

// search photos function
async function searchPhotos() {
  // search query
  query = inputValue.value;
  // url for fetching data from api
  let url = `https://api.unsplash.com/search/photos/?client_id=${accessKey}&query=${query}&page=${page}`;

  // fetch data from api
  const response = await fetch(url);
  // convert response into json format
  const data = await response.json();
  // get the results array from data
  const results = data.results;
  console.log(results);

  if (page === 1) {
    gallery.innerHTML = "";
    about.remove();
    //features.remove();
  }

  //
  results.map((result) => {
    const imgWrapper = document.createElement("div");
    imgWrapper.classList.add("search-result");

    const photoLink = document.createElement("a");
    photoLink.href = result.links.html;
    photoLink.target = "_blank";

    const img = document.createElement("img");
    img.src = result.urls.regular;
    img.alt = result.alt_description;

    const imgLink = document.createElement("a");
    imgLink.href = result.links.html;
    imgLink.target = "_blank";
    imgLink.textContent = result.alt_description;

    imgWrapper.appendChild(photoLink);
    photoLink.appendChild(img);
    photoLink.appendChild(imgLink);
    gallery.appendChild(imgWrapper);
  });

  page++;

  if (page > 1) {
    showBtn.classList.remove("hidden");
  }
}

searchInput.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchPhotos();
});

showBtn.addEventListener("click", () => {
  searchPhotos();
});

// const accessKey = "FKL3yk4A9dDvsN2Ca_v8-20dTl_ecsY3B9f66SpBD90";

// const searchInput = document.querySelector(".input-form");
// const inputValue = document.querySelector(".input");
// const gallery = document.querySelector(".image-gallery");
// const showBtn = document.querySelector(".show-btn");
// // about page
// const about = document.querySelector(".about");
// const features = document.querySelector(".features");

// //
// let query = "";
// // page number
// let page = 1;

// // search photos function
// async function searchPhotos() {
//   // search query
//   query = inputValue.value;
//   // url for fetching data from api
//   let url = `https://api.unsplash.com/search/photos/?client_id=${accessKey}&query=${query}&page=${page}`;

//   // fetch data from api
//   const response = await fetch(url);
//   // convert response into json format
//   const data = await response.json();
//   // get the results array from data
//   const results = data.results;
//   console.log(results);

//   if (page === 1) {
//     gallery.innerHTML = "";
//     about.remove();
//     features.remove();
//   }

//   //
//   results.forEach((result) => {
//     const imgWrapper = document.createElement("div");
//     imgWrapper.classList.add("search-result");

//     const img = document.createElement("img");
//     img.src = result.urls.regular;
//     img.alt = result.alt_description;

//     const imgLink = document.createElement("a");
//     imgLink.href = result.links.html;
//     imgLink.target = "_blank";
//     imgLink.textContent = result.alt_description;

//     imgWrapper.appendChild(img);
//     imgWrapper.appendChild(imgLink);
//     gallery.appendChild(imgWrapper);
//   });

//   page++;

//   if (page > 1) {
//     showBtn.classList.remove("hidden");
//   }
// }

// searchInput.addEventListener("submit", (e) => {
//   e.preventDefault();
//   page = 1;
//   searchPhotos();
// });

// showBtn.addEventListener("click", () => {
//   searchPhotos();
// });



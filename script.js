const searchBtn = () => {
  const input = document.getElementById("input");
  const inputVal = input.value;
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputVal}`)
    .then((res) => res.json())
    .then((data) => showMeals(data.meals));
};

const showMeals = (data) => {
  const contentBox = document.getElementById("content-box");
  for (const element of data) {
    // console.log(element);
    const div = document.createElement("div");
    div.classList.add("mt-4");
    div.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${element.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.strMeal}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Details</a>
        </div>
      </div>

        `;
    contentBox.appendChild(div);
  }
};

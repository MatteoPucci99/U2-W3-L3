const filmStorage = () => {
  const dropdownMenu = document.getElementById("dropdown");
  const savings = JSON.parse(localStorage.getItem("shoppingCard"));
  console.log(savings);
  if (savings) {
    savings.forEach((el) => {
      const newLi = document.createElement("li");
      newLi.classList.add("dropdown-item");
      dropdownMenu.appendChild(newLi);
      newLi.innerHTML = `${el}`;
    });
  }
};
filmStorage();

const myRow = document.getElementById("row");
const createCard = (book) => {
  book.forEach((el, index) => {
    const newCol = document.createElement("div");
    newCol.classList.add("col-4", "mb-5");
    const newCard = document.createElement("div");
    newCard.classList.add("card", "h-100");
    newCard.innerHTML = `
        <img src="${el.img}" class="card-img-top" alt="film-${index}">
        <div class="card-body">
          <h5 class="card-title">${el.title}</h5>
          <p class="card-text">${el.price}$</p>
          <button class="mb-1 btn btn-primary" onclick="reset(event)">Scarta</button>
          <button class="mb-1 btn btn-success" onclick="addCart(event)">Aggiungi al carrello</button>
        </div>`;
    myRow.appendChild(newCol);
    newCol.appendChild(newCard);
  });
};

const reset = (e) => {
  const card = e.target.closest(".col-4");
  card.remove();
};

const dropDownList = [];
const addCart = (e) => {
  const dropdownMenu = document.getElementById("dropdown");
  const title = e.target.parentElement.querySelector("h5");
  const newLi = document.createElement("li");
  newLi.classList.add("dropdown-item");
  dropdownMenu.appendChild(newLi);
  newLi.innerHTML = `${title.innerText}`;
  newLi.style = "cursor:pointer";
  dropDownList.push(title.innerText);
  localStorage.setItem("shoppingCard", JSON.stringify(dropDownList));
  //   console.log(dropDownList);
};

fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Errore");
    }
  })
  .then((book) => {
    console.log(book);
    createCard(book);
  })
  .catch((err) => {
    console.log("Attenzione", err);
  });

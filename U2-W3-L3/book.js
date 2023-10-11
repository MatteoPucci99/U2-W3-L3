const reset = (e) => {
  const card = e.target.parentElement.parentElement;
  card.remove();
};

fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Errore nella response");
    }
  })
  .then((book) => {
    console.log("Lista di libri", book);
    const container = document.getElementById("container");
    // CREO LA ROW
    let div = document.createElement("div");
    div.classList.add("row");
    container.appendChild(div);
    // CREO TANTE COLONNE QUANTI I LIBRI E LE APPENDO ALLA ROW
    const arrayOfRows = Array.from(document.getElementsByClassName("row"));
    //   SOLUZIONE MIGLIORE E PIU' VELOCE
    book.forEach((el) => {
      const column = document.createElement("div");
      column.classList.add("col-4", "mb-4");
      const newCard = document.createElement("div");
      newCard.classList.add("card", "h-100");
      newCard.innerHTML = `<img src="${el.img}" class="card-img-top" alt="${el.title}">
       <div class="card-body">
          <h5 class="card-title">${el.title}</h5>
          <p class="card-text">Prezzo: ${el.price} €</p>
          <button class="btn btn-danger" onclick="reset(event)">Scarta</button>`;
      column.appendChild(newCard);
      arrayOfRows[0].appendChild(column);
    });

    // SOLUZIONE GRAZIE A CHATGBPT

    // const arrayOfColumns = Array.from(document.getElementsByClassName("col-4"));
    // console.log(arrayOfColumns);

    // book.forEach((el, index) => {
    //   const columnIndex = index % arrayOfColumns.length; // Calcola l'indice della colonna utilizzando l'operatore modulo
    //   const card = arrayOfColumns[columnIndex];

    //   // Concatena il contenuto HTML per ogni libro alla colonna corrispondente
    //   card.innerHTML += `
    //       <div class="card">
    //         <img src="${el.img}" class="card-img-top" alt="${el.title}">
    //         <div class="card-body">
    //           <h5 class="card-title">${el.title}</h5>
    //           <p class="card-text">Prezzo: ${el.price} €</p>
    //           <button class="btn btn-danger" onclick="reset()">Scarta</button>
    //         </div>
    //       </div>
    //     `;
    // });

    // MIA SOLUZIONE

    // for (let i = 0; i < arrayOfColumns.length; i++) {
    //   for (let j = 0; j < book.length; j++) {
    //     if (i === j) {
    //       arrayOfColumns[i].innerHTML = `
    //       <div class="card h-100">
    //          <img src="${book[j].img}" class="card-img-top h-75" alt="${book[j].title}">
    //          <div class="card-body">
    //            <h5 class="card-title">${book[j].title}</h5>
    //          <p class="card-text">Prezzo: ${book[j].price} €</p>
    //           <button class="btn btn-danger" onclick="reset()">Scarta</button>
    //         </div>
    //        </div>
    //      `;
    //     }
    //   }
    // }
  })
  .catch((err) => {
    console.log("Errore", err);
  });

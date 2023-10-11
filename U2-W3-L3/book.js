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

    let div = document.createElement("div");
    div.classList.add("row");
    container.appendChild(div);

    const arrayOfRows = Array.from(document.getElementsByClassName("row"));
    book.forEach((el) => {
      let column = document.createElement("div");
      column.classList.add("col-4");
      arrayOfRows[0].appendChild(column);
    });
    const arrayOfColumns = Array.from(document.getElementsByClassName("col-4"));
    console.log(arrayOfColumns);

    arrayOfColumns.forEach((card) => {
      book.forEach((el) => {
        // console.log(card);
        // console.log(card);
        // console.log(el.img);
        // console.log(el.title);
        // console.log(el.price);
        card.innerHTML = `
            <div class="card">
            <img src="${el.img}" class="card-img-top" alt="${el.title}">
            <div class="card-body">
            <h5 class="card-title">${el.title}</h5>
            <p class="card-text">Prezzo: ${el.price} €</p>
            <button class="btn btn-danger" onclick="reset">Scarta</button>
            </div>
            </div>
            `;
      });
      // arrayOfColumns.forEach((col) => {
      //   console.log(col);
      // });
    });
    // for (let i = 0; i < arrayOfColumns.length; i++) {
    //   for (let j = 0; j < book.length; j++) {
    //     // console.log(card);
    //     // console.log(card);
    //     // console.log(el.img);
    //     // console.log(el.title);
    //     // console.log(el.price);
    //     arrayOfColumns[i].innerHTML = `
    //                   <div class="card">
    //                     <img src="${book[j].img}" class="card-img-top" alt="${book[j].title}">
    //                     <div class="card-body">
    //                       <h5 class="card-title">${book[j].title}</h5>
    //                       <p class="card-text">Prezzo: ${book[j].price} €</p>
    //                       <button class="btn btn-danger" onclick="reset">Scarta</button>
    //                     </div>
    //                   </div>
    //                 `;
    //   }
    // }
    // arrayOfColumns.forEach((card) => {
    //   for (let i = 0; i < book.length; i++) {
    //     // console.log(card);
    //     // console.log(card);
    //     // console.log(el.img);
    //     // console.log(el.title);
    //     // console.log(el.price);
    //     card.innerHTML = `
    //           <div class="card">
    //             <img src="${book[i].img}" class="card-img-top" alt="${book[i].title}">
    //             <div class="card-body">
    //               <h5 class="card-title">${book[i].title}</h5>
    //               <p class="card-text">Prezzo: ${book[i].price} €</p>
    //               <button class="btn btn-danger" onclick="reset">Scarta</button>
    //             </div>
    //           </div>
    //         `;
    //   }
    // });
  })
  .catch((err) => {
    console.log("Errore", err);
  });

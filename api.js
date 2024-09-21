let projectsGridItem = document.querySelector("main");

fetch('https://x8ki-letl-twmt.n7.xano.io/api:DJXpB7n0/user', { 
  method: 'GET'
})
.then(function(response) { return response.json(); })
.then(function(json) {
  // use the json

  for (let i = 0; i < json.length; i++) {
    // Use this as a shell for inserting data from github api into site
    // Use json[i].name for image extensions (for example, img.src = `img/${json[i].name}.webp`)
    // console.log(json[i].name);
    // console.log(json[i].language);
    // console.log(json[i].html_url);
    // console.log(json[i].homepage);

    let gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");

    gridItem.innerHTML = `
          <h2>${json[i].name}</h2>
          <span>${json[i].email}</span>
        `

    projectsGridItem.append(gridItem);
  }

});

function submit() {
    let moveName = document.getElementById("name").value;
    let body = ``;
    fetch(`http://www.omdbapi.com/?apikey=1c768e4f&s=${moveName}`)
        .then(res => res.json())
        .then(data => {

            let list = data.Search;

            list.forEach(line => {
                body += `
                
              <div class="card m-5 col-4" style="width: 18rem; background-color: #2f2f2fff;">
                    <img src="${line.Poster}" class="card-img-top mt-1" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-info">${line.Title}</h5>
                        <p class="card-text text-light">Type : ${line.Type}</p>
                        <p class="card-text text-light">Year : ${line.Year}</p>
                        <p class="card-text text-light">IMDB id : ${line.imdbID}</p>
                        <button><a href="details.html?name=${line.Title}">View details</a></button>
                    </div>
                </div>
                `
            })


            console.log(body)
            cardCol.innerHTML = body;

        })
}
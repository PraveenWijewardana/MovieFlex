//////////////////////////////////////////////////////////////////////////////////
    const url = window.location.search;

    // 2. Create a URLSearchParams object to easily parse the query string
    const params = new URLSearchParams(url);

    // 3. Get the value of the 'id' parameter
    const moveId = params.get('id');
/////////////////////////////////////////////////////////////////////////////////

    fetch(` http://www.omdbapi.com/?apikey=1c768e4f&i=${moveId}`)
    .then(res=>res.json())
    .then(data=>{
        
        movImage.src=data.Poster;
        title.innerHTML = data.Title;
        sub.innerHTML=data.Plot;
        Director.innerHTML=data.Director;
        rTime.innerHTML=data.Runtime;
        console.log(data)

        let rate = data.Ratings;
        
        let list;

            rate.forEach(rate => {
                 list += `<li>${rate.Source+" - "+rate.Value}</li>`
            })

        ratings.innerHTML=list;
        Review.innerHTML=data.Plot;
        Awards.innerHTML=data.Awards;
        movImage0.src = data.Poster;
        movImage1.src = data.Poster;
        movImage2.src = data.Poster;
        movImage3.src = data.Poster;
        




    })
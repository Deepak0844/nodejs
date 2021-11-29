const { query } = require('express')
const express = require('express')
const app = express()

const movies=[
    {
     "poster": "https://images5.alphacoders.com/105/thumb-1920-1054541.jpg",
     "title": "Jumanji: The Next Level",
     "genre": "Action Adventure Comedy",
     "image": "https://images4.alphacoders.com/104/thumb-1920-1049721.jpg",
     "director": "Jake Kasdan",
     "summary": "In Jumanji The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game.",
     "releasedyear": 2019,
     "rating": 3.4,
     "trailer": "https://www.youtube.com/embed/rBxcF-r9Ibs",
     "id": "100",
     "language":"english",
    },
    {
     "poster": "https://images5.alphacoders.com/114/thumb-1920-1142280.jpg",
     "title": "The Amazing Spider-Man",
     "genre": "Action Adventure Fantasy",
     "image": "https://wallpapercave.com/wp/wp4898682.png",
     "director": "Marc Webb",
     "summary": "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
     "releasedyear": 2012,
     "rating": 3.4,
     "trailer": "https://www.youtube.com/embed/-tnxzJ0SSOw",
     "id": "101",
     "language":"telugu",
    },
    {
     "poster": "https://images.alphacoders.com/710/thumb-1920-710865.jpg",
     "title": "Finding Dory",
     "genre": "Animation Adventure Comedy",
     "image": "https://wallpapercave.com/wp/wp7123042.jpg",
     "director": "Andrew StantonAngus, MacLane",
     "summary": "Friendly but forgetful blue tang Dory begins a search for her long-lost parents, and everyone learns a few things about the real meaning of family along the way.",
     "releasedyear": 2016,
     "rating": 3.8,
     "trailer": "https://www.youtube.com/embed/3JNLwlcPBPI",
     "id": "102",
     "language":"tamil",
    },
    {
     "poster": "https://wallpapercave.com/wp/wp1811160.jpg",
     "title": "Mad Max: Fury Road",
     "genre": "Action Adventure Sci-Fi",
     "image": "https://vistapointe.net/images/mad-max-fury-road-wallpaper-2.jpg",
     "director": "Gary Shore",
     "summary": "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
     "releasedyear": 2015,
     "rating": 4,
     "trailer": "https://www.youtube.com/embed/hEJnMQG9ev8",
     "id": "103",
     "language":"english",
    },
    {
     "poster": "https://images8.alphacoders.com/286/thumb-1920-286077.jpg",
     "title": "The Dark Knight",
     "genre": "Action Crime Drama",
     "image": "https://images5.alphacoders.com/590/thumb-1920-590862.jpg",
     "director": " Christopher Nolan",
     "summary": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
     "releasedyear": "2008",
     "rating": 4.5,
     "trailer": "https://www.youtube.com/embed/EXeTwQWrcwY",
     "id": "104",
     "language":"english",
    }
   ]
   const PORT=9000
app.get('/',(request,response)=>{
    response.send("hello")
})

app.get('/movies',(request,response)=>{
    //request query parms
    const { language,rating } = request.query;
    console.log(language,rating);
      let filterMovies = movies
    if(language){
      filterMovies = filterMovies.filter((mv)=>mv.language === language)   
    }
    if(rating){
        filterMovies = filterMovies.filter((mv)=>mv.rating === +rating)   
      }
 
    response.send(filterMovies)
})
app.get('/movies/:id',(request,response)=>{
    const {id} = request.params
    const movie = movies.find(mv=>mv.id === id)
    movie?response.send(movie) 
    : response.status(404).send({msg:"no matching movie found"})
})

app.listen(PORT,()=>console.log("App is started",PORT));
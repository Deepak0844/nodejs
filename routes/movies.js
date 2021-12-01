import express from "express";
import { getMovies, createMovie, deleteMovieById, getMovieById, updateMovieById } from "../Helper.js";
const router = express.Router();
//get movies - get
router
.route("/")
.get(async(request,response)=>{
    //request -> query parms
    const filter = request.query;
    if(filter.rating){
    filter.rating = parseFloat(filter.rating);
    }
      let filterMovies = await getMovies(filter);//cursor to array
  //cursor - pagination 1 2 3 4 5 next->
    response.send(filterMovies)
})
//adding movie - post
.post(async (request, response)=>{
  const data = request.body;
  const result = await createMovie(data)
  response.send(result);
})

//deleting the movie - delete
router
.route("/:id")
.delete(async(request, response)=>{
  const {id} = request.params
  const result = await deleteMovieById(id)

  result.deletedCount > 0 
  ? response.send(result) 
  : response.status(404).send({ message:"No matching movie found" })
  
})
// get movies by id - get
.get(async (request,response)=>{
    const {id} = request.params
    // const movie = movies.find(mv=>mv.id === id)
    const movie = await getMovieById(id);
    movie ? response.send(movie) 
    : response.status(404).send({msg:"no matching movie found"})
})
//update movie by id - put
router.put(async (request,response)=>{
  const {id} = request.params
  const data = request.body;
  const updateMovie = await updateMovieById(id, data);
  const movie = await getMovieById(id)
  response.send(movie)
})

export const moviesRouter = router;
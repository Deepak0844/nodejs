import { client } from "./index.js";
import {ObjectId} from 'mongodb';

async function getMovies(filter) {
  return await client
    .db("b28wd")
    .collection("movies")
    .find(filter)
    .toArray();
}
async function createMovie(data) {
  return await client
    .db("b28wd")
    .collection("movies")
    .insertMany(data);
}
async function deleteMovieById(id) {
  return await client
    .db("b28wd")
    .collection("movies")
    .deleteOne({ _id: ObjectId(id)});
}
async function getMovieById(id) {
  return await client
    .db("b28wd")
    .collection("movies")
    .findOne({ _id: ObjectId(id) });
}
async function updateMovieById(id, data) {
  return await client
    .db("b28wd")
    .collection("movies")
    .updateOne({ _id: ObjectId(id) }, { $set: data });
}

export { getMovies, createMovie, deleteMovieById, getMovieById, updateMovieById };
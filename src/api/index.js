import axios from "axios"

export const api_key = "8f0eb565a7a75f81e6ec747c2df97941"

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})
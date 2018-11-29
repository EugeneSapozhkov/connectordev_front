import axios from "axios"
import { APIUrl } from "/config"

const instance = axios.create({
  baseURL: APIUrl,
  headers: {'Cache-Control': 'no-cache, no-store, must-revalidate'},
});


export default instance
import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key : "c8f31b7b86734c8ab6457d33b2079373"
    }
})
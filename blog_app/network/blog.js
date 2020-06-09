import { defaultUrl } from "./domain";
import Axios from "axios";

module.exports = {
    getPostsList :
        (params)=>  Axios.get(`${defaultUrl}/default/posts/getPostsList`, { params })
}
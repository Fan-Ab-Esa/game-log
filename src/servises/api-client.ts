import axios from "axios";
export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'2090d839227b424a99a04944821e6492'
    }
})
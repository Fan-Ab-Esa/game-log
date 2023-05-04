import apiClient from "./api-client";
class GameServise{
     getAllGames(){
        const controller=new AbortController()
       const request= apiClient.get('/games',{signal:controller.signal})
       const cancel=()=>{controller.abort()};
       return {request,cancel}
    }
}
export default new GameServise()
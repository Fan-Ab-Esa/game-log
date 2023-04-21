import apiClient from "./api-client";
class GameServise{
     getAllGames(){
        return apiClient.get('/games')
    }
}
export default new GameServise()
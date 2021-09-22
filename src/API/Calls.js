import axios from "axios";
const URL = "https://api.magicthegathering.io/v1"

const api = {
    getAllCards: async () => {
        let result = await axios.get(URL + "/cards")
        return result.data.cards
    }

}

export default api
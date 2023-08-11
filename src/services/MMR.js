import axios from "axios";

const baseUrl = "http://localhost:3005/api/MMR";

const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
}

const MMRService = { getAll }

export default MMRService;
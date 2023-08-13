import axios from "axios";

const baseUrl = "/api/MMR";

const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
}

const MMRService = { getAll }

export default MMRService;
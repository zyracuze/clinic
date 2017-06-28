import axios from 'axios'

const URL="http://localhost:8888/patient/search";

function validateSearch(data) {
    return axios.post(URL,data).then(
        responseFromSearch => responseFromSearch.data
    );
}

export default { validateSearch}
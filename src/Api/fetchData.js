import axios from 'axios'

function vietnamCovid() {
    return axios.get("https://api.covid19api.com/country/vietnam")
}
function researchData() {
    return axios.get("https://gcalls-hackathon.herokuapp.com/api/question/questionanalyze")
}
function researchDataText() {
    return axios.get("https://gcalls-hackathon.herokuapp.com/api/data/dataanalyze")
}

export {vietnamCovid, researchData, researchDataText}
import axios from 'axios'

function vietnamCovid() {
  return axios.get("https://api.covid19api.com/country/vietnam")
}
function researchData() {
  return axios.get("https://gcovid.tk/api/question/questionanalyze")
}
function researchDataText() {
  return axios.get("https://gcovid.tk/api/data/dataanalyze")
}

export { vietnamCovid, researchData, researchDataText }
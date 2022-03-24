class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

 async getFullList () {
    return axios.get(`/characters`)
  }

  async getOneRegister (characterId) {
    return axios.get(`/characters ${characterId}`) 
  }

  createOneRegister (characterInfo) {
    return axios.post(`/characters ${characterInfo}`) 
  }

  updateOneRegister (characterId, characterInfo) {
    return axios.put(`/characters/${characterId}`, characterInfo);
  }

  deleteOneRegister (characterId) {
    return axios.delete(`/characters ${characterId}`) 
  }
}


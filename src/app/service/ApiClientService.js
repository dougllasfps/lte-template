import axios from '../config/axios'

export default class ApiClientService{

    constructor(apiUrl){
        this.apiUrl = apiUrl;
    }

    get = async (query) => {
        return axios.get(`${this.apiUrl}${query}`)
    }

    post = async (object) => {
        return await axios.post(this.apiUrl, object)
    }

    put = async (object) => {
        const {id} = object
        return axios.put(`${this.apiUrl}/${id}`, object)
    }

    delete = async (id) => {
        return axios.delete(`${this.apiUrl}/${id}`)
    }

    static setToken( token ){
        axios.default.headers.commom['Authorization'] = `Bearer ${token}`
    }
}
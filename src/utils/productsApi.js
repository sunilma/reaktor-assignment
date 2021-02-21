import axios from 'axios'

const baseURL = "https://bad-api-assignment.reaktor.com"

const productsApi = "v2/products"
const availabilityApi = "v2/availability"


const getProducts = async (product) => {
    const data = await axios.get(`${baseURL}/${productsApi}/${product}`, {headers: {'x-force-error-mode': 'all'}})
    console.log(data.data)
    return data.data
}

const getAvailability = async (manufacturer) => {
    
    let data = await axios.get(`${baseURL}/${availabilityApi}/${manufacturer}`, {headers: {'x-force-error-mode': 'all'}})
    while (data.data.response === "[]") {
        data = await axios.get(`${baseURL}/${availabilityApi}/${manufacturer}`)
    }
    return (data.data.response)
}

export {
    getProducts, getAvailability
}